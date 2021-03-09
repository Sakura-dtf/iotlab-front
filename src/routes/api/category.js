const router = require('koa-router')()

const { addCategory } = require('../../controller/category')

router.prefix('/category');

router.post('/add',  async (ctx,next) => {
    const { name } = ctx.request.body;


    const result = await addCategory(name);

    ctx.body = result

})



module.exports = router
