/**
 * @description 文章 controller
 * @author me
 * */


const {
    createArticle,
    getAllCountByIndex,
    getArticleByIndex,
    getArticleInfoById,
    getArticleByUserId,
    getUserArticleIdByUserId
} = require('../services/article')

const { SuccessModel, ErrorModel } = require('../db/model/ResModel')

const {
    createArticleFailInfo,
    findArticleFailInfo,
    findArticleInfoFailInfo
} = require('../db/model/ErrorInfo')


/**
 * 添加文章
 * @param{Object} 文章对象
 * */
async function addArticle( {userId,categoryId,title,describe,content,index,image = null} ) {
    try {
        const result = await createArticle({userId,categoryId,title,describe,content,index,image});

        return new SuccessModel(result);

    }catch (e) {
        return new ErrorModel(createArticleFailInfo);
    }
}



/**
 * 根据id获取的所有文章
 * */

async function findAllArticle( {index, pageSize, pageIndex, categoryId,order}){

    console.log({index, pageSize, pageIndex, categoryId,order})

    const result = await getArticleByIndex({index,pageSize,pageIndex,categoryId,order});


    const count = await getAllCountByIndex(index,categoryId);

    let data = { results: result};

    data.count = count;


    if(result.length > 0){
        return new SuccessModel(data);
    }
    return new ErrorModel(findArticleFailInfo);
}





/**
 * 获取首页project 的所有成功文章
 * */

async function findAllProjectArticle(){

    const result = await getArticleByIndex({index:2, pageSize: 6,pageIndex: 0});

    if(result.length > 0){
        return new SuccessModel(result);
    }
    return new ErrorModel(findArticleFailInfo);
}


/**
 * 获取更多文章的html字符串
 * @param{Number} index index 值 文章类型
 * @param{Number} pageIndex 页数
 * @param{Number} pageSize 每页数量
 * @param{Number} categoryId 栏目id
 * */
async function getArticleLoadMore({index,pageIndex,pageSize,categoryId}){
    return await getArticleByIndex({index,pageIndex, pageSize,categoryId});
}


/**
 * 获取 文章具体信息
 * @param{Number} id  文章id
 * @param{Boolean} isSup 是不是管理员
 * */
async function findArticleInfoById({id,isSup}){
    const results = await getArticleInfoById({id,isSup});

    console.log(results);

    if(results){
        if(!isSup){
            let userId = results.user.id;

            const userArticles = await getArticleByUserId(userId);

            let obj = {};

            let arrObj = {categoryId: userArticles[0].category.id}
            let article = {
                id: userArticles[0].id,
                title: userArticles[0].title
            }
            arrObj.articles = [];
            arrObj.articles.push(article);

            let arr = [];

            arr.push(arrObj)


            userArticles.forEach( item => {
                let arrObj = {
                    categoryId: item.category.id,
                    categoryName: item.category.name
                }
                arrObj.articles = []
                let article = {
                    id: item.id,
                    title: item.title
                }

                let flag = 1,j = -1;

                for (let i = 0; i < arr.length; i++) {

                    if(arr[i].categoryId === arrObj.categoryId){
                        flag = 0;
                        j = i;
                    }
                }

                if(flag === 0 && j !== -1){
                    arr[j].articles.push(article);
                }else {
                    arrObj.articles.push(article);
                    arr.push(arrObj);
                }
            })

            obj.articleInfo = results;
            obj.userInfo = userArticles;
            obj.userArticle = arr;
            return new SuccessModel(obj);
        }
        else {
            return new SuccessModel(results)
        }
    }

    return new ErrorModel(findArticleInfoFailInfo);
}


async function findUserArticleByUserId(id){
    return await getUserArticleIdByUserId(id);
}

module.exports = {
    addArticle,
    findAllProjectArticle,
    findAllArticle,
    getArticleLoadMore,
    findArticleInfoById,
    findUserArticleByUserId
}