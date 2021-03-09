const router = require('koa-router')()

const { findAllPhoto } = require('../../controller/photo')

router.prefix('/photo')

router.get('/', async (ctx, next) => {

    const res = await findAllPhoto(0,12);

    console.log(res);

    await ctx.render('photograph',{
        res
    });
})



module.exports = router
