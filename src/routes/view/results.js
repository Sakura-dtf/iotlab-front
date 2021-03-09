const router = require('koa-router')()

const {findAllArticle} = require('../../controller/article')

router.prefix('/results')

router.get('/:categoryId', async (ctx, next) => {

    let categoryId = parseInt(ctx.params.categoryId);

    const results = await findAllArticle({index: 4, categoryId , pageSize: 4, pageIndex: 0});

    await ctx.render('results',{
        data: results,
        categoryId
    });
})



module.exports = router
