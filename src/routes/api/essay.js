const router = require('koa-router')()

const { findUserInfoById } = require('../../controller/user')

const { findArticleInfoById } = require('../../controller/article')

router.prefix('/essayApi')

router.get('/getContent', async (ctx, next) => {

    let id = parseInt(ctx.request.query.id);

    ctx.body = await findArticleInfoById({id, isSup: false});

})



module.exports = router
