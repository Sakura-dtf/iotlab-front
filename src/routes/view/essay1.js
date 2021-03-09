const router = require('koa-router')()

const { findUserInfoById } = require('../../controller/user')

const { findArticleInfoById } = require('../../controller/article')
router.prefix('/essay1')

router.get('/:id', async (ctx, next) => {

    let id = parseInt(ctx.params.id);

    const results = await findArticleInfoById({id, isSup: false})

    let userId = results.data.articleInfo.user.id

    console.log(results);

    await ctx.render('essay1',{
        data: results
    })

})



module.exports = router
