const router = require('koa-router')()

const { findForumCategory } =require('../../controller/category')

const {findAllArticle} = require('../../controller/article')

router.prefix('/forum')

router.get('/:categoryId', async (ctx, next) => {

    let categoryId = parseInt(ctx.params.categoryId);



    let obj = {index: 5, pageIndex: 0, pageSize: 8, categoryId}

    if(categoryId === 0){
        obj.order = true;
    }

    const categories = await findForumCategory();

    const articles = await findAllArticle(obj);

    const hotObj = {};

    Object.assign(hotObj,obj);
    hotObj.order = true;
    hotObj.pageSize = 7;

    const hots = await findAllArticle(hotObj);

    await ctx.render('forum',{
        categories,
        articles,
        hots,
        categoryId,
    });
})




module.exports = router
