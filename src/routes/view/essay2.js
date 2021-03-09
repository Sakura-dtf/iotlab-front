const router = require('koa-router')()

const { findUserInfoById } = require('../../controller/user')

const { findArticleInfoById } = require('../../controller/article')
router.prefix('/essay2')

router.get('/:id', async (ctx, next) => {

    let id = parseInt(ctx.params.id);

    const results = await findArticleInfoById({id, isSup: true})

    console.log(results);


    await ctx.render('essay2',{
        data: results,
        id
    })

})



module.exports = router
