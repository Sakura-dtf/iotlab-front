const router = require('koa-router')()

const { findAllUser } = require('../../controller/user')

router.prefix('/members')

router.get('/', async (ctx, next) => {

    const res = await findAllUser();

    await ctx.render('members',{
        res
    });
})



module.exports = router
