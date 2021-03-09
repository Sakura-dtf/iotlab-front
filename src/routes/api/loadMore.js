const router = require('koa-router')()

const { getLoadMore } = require('../../controller/user')

const {
    getUserListStr,
    getResultListStr,
    getForumListStr,
    getPhotoListStr
} = require('../../utils/loadMore')



const { SuccessModel } = require('../../db/model/ResModel');

const {getArticleLoadMore} = require('../../controller/article')
const { getPhotoLoadMore } = require('../../controller/photo')


router.prefix('/loadMore');

router.get('/user',  async (ctx,next) => {
    let pageIndex = parseInt(ctx.request.query.pageIndex);
    const result = await getLoadMore(pageIndex,4);
    const str = getUserListStr(result,pageIndex);
    pageIndex++;
    let obj = { data: str };
    obj.pageIndex = pageIndex;

    obj.isTotal = result.length <= 0;
    ctx.body = new SuccessModel(obj);
})

router.get('/results',  async (ctx,next) => {

    let pageIndex = parseInt(ctx.request.query.pageIndex);
    let  categoryId = parseInt(ctx.request.query.categoryId);

    console.log(pageIndex);

    const results = await getArticleLoadMore({index:4,pageIndex,pageSize: 2,categoryId});

    const str = await getResultListStr(results);

    console.log(results);

    pageIndex++;
    let obj = { data: str };
    obj.pageIndex = pageIndex;

    obj.isTotal = results.length <= 0;
    ctx.body = new SuccessModel(obj);

})


router.get('/forum',async (ctx,next) => {
    let  pageIndex  = parseInt(ctx.request.query.pageIndex);
    let  categoryId = parseInt(ctx.request.query.categoryId);

    console.log(pageIndex,categoryId);
    const results = await getArticleLoadMore({index:5,pageIndex,pageSize: 4,categoryId});

    const str = await getForumListStr(results);

    pageIndex++;
    let obj = { data: str };
    obj.pageIndex = pageIndex;

    obj.isTotal = results.length <= 0;
    ctx.body = new SuccessModel(obj);

})


router.get('/photo',async (ctx,next) => {
    let  pageIndex  = parseInt(ctx.request.query.pageIndex);
    let  categoryId = parseInt(ctx.request.query.categoryId);

    const results = await getPhotoLoadMore({pageIndex,pageSize: 4});

    const str = await getPhotoListStr(results);

    pageIndex++;
    let obj = { data: str };
    obj.pageIndex = pageIndex;

    obj.isTotal = results.length <= 0;
    ctx.body = new SuccessModel(obj);

})


module.exports = router
