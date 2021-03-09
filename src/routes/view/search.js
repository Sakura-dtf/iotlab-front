const router = require('koa-router')()

const xss = require('xss');

router.prefix('/search')



router.post('/', async (ctx, next) => {


    let { search: value} = ctx.request.body;

    value = xss(value);

    console.log(value);

    await ctx.render('search',{
        value
    })
})



module.exports = router
