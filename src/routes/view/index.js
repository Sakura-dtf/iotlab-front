const router = require('koa-router')()


const {addCategory} = require('../../controller/category')

const {
    findAllProjectArticle,
} = require('../../controller/article')

router.prefix('/')

router.get('/', async (ctx, next) => {


    const projectList = await findAllProjectArticle();

    await ctx.render('index',{
        projectList
    });
})





module.exports = router
