const router = require('koa-router')()

const { addArticle } = require('../../controller/article')

router.prefix('/article');


router.post('/add',  async (ctx,next) => {
    const {userId,categoryId,title,describe,content,index,image} = ctx.request.body;

    const result = await addArticle( {userId,categoryId,title,describe,content,index,image} );


    ctx.body = result
})



module.exports = router
