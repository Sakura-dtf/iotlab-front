/**
 * @description 文章 services
 * @author me
 * */

const moment = require('moment');
const { Article,Category,User } = require('../db/model/index');


/**
 * 创建文章
 * @param{Object} 文章对象 必须包括 userId,categoryId,title,describe,content,index,image
 * */

async function createArticle({userId,categoryId,title,describe,content,index,image = null}) {

    const result = await Article.create({
        userId,
        categoryId,
        title,
        describe,
        content,
        index,
        image
    })

    return result.dataValues;
}



/**
 * 通过index获取所有文章
 * @param{Object} param1
 * */
async function getArticleByIndex({index,pageSize,pageIndex,categoryId,order}){
    console.log({index,pageSize,pageIndex,categoryId})
    let obj = {
        attributes: ['id','title','describe','content','image','readNum','createdAt'],
        where:{
            index,
        },
        order: [['createdAt','desc']]
    }

    if(pageIndex){
        obj.offset= pageIndex * pageSize
    }

    if(pageSize){
        obj.limit = pageSize
    }

    if(order){
        obj.order = [['readNum','desc']]
    }

    if(categoryId && categoryId !== 0){
        obj.include = [
            {
                model: Category,
                attributes: ['id'],
                where: {
                    id: categoryId
                }
            }
        ]
    }

    console.log(obj)
    const result = await Article.findAll(obj)

    let articleList = result.map( item => {
        item.dataValues.createdAt = moment(item.dataValues.createdAt).format('YYYY-MM-DD hh:mm:ss');
        item.dataValues.content = JSON.stringify(item.dataValues.content);
        item = item.dataValues;
        return item;
    });

    console.log(articleList);

    return articleList
}



/**
 * 通过index获取所有文章
 * @param{Number} index
 * @param{Number} categoryId
 * */
async function getAllCountByIndex(index,categoryId){
    let obj = {}
    obj.attributes = ['id']
    obj.where = {
        index
    }
    if(categoryId){
        obj.include = [
            {
                model: Category,
                attributes: ['id'],
                where: {
                    id: categoryId
                }
            }
        ]
    }
    const result = await Article.findAndCountAll(obj)

    return result.count
}

async function getArticleInfoById({id,isSup}){
    let obj = {
        where: {
            id
        },
        attributes: ['id','title','describe','content','image','index','createdAt','readNum']
    }
    if(!isSup){
        obj.include = [
            {
                model: User,
                attributes: ['id','name','avatar']
            }
        ]
    }

    let results = await Article.findOne(obj);

   /* let res = { readNum: 0 },
    res.readNum = results.dataValues.readNum    */

    let readNum = ++results.dataValues.readNum;

    await Article.update({
        readNum: readNum
    },{
        where: {
            id
        }
    })


    // results.dataValues.content = JSON.parse(JSON.stringify(results.dataValues.content.toString()));
    results.dataValues.content = JSON.stringify(results.dataValues.content);
    if(results.dataValues.user){
        results.dataValues.user = results.dataValues.user.dataValues;
    }
    console.log(results);
    results.dataValues.createdAt = moment(results.dataValues.createdAt).format('YYYY-MM-DD h:mm:ss');
    return results.dataValues;
}


/**
 * 获取用户的所有文章
 * @param{Number} id
 * */
async function getArticleByUserId(id){
    let results = await Article.findAll({
        attributes: ['id','title','describe','content','image','readNum','createdAt'],
        include: [
            {
                model: User,
                where: {
                    id
                },
                attributes: ['id']
            },
            {
                model: Category,
                attributes: ['id','name']
            }
        ]
    })


    results = results.map(item => {
        item.dataValues.user = item.dataValues.user.dataValues;
        item.dataValues.category = item.dataValues.category.dataValues;
        return item.dataValues
    })


    return results;
}


async function getUserArticleIdByUserId(id){
    return Article.findOne({
        attributes: ['id'],
        where: {
            userId: id,
            index: 3
        }
    })
}

module.exports = {
    createArticle,
    getArticleByIndex,
    getAllCountByIndex,
    getArticleInfoById,
    getArticleByUserId,
    getUserArticleIdByUserId
}

