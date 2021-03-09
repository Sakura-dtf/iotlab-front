
const router = require('koa-router')()


router.prefix('/user')

const {
    findUserArticleByUserId,
    findArticleInfoById,
} = require('../../controller/article')

const {findUserArticleCount} = require("../../controller/user");

router.get('/:id', async (ctx, next) => {

    let id = parseInt(ctx.params.id);


    console.log(id);
    const res = await findUserArticleByUserId(id);

    await findUserArticleCount(id);


    let articleId = res.dataValues.id;

    console.log(articleId);

    const results = await findArticleInfoById({id: articleId, isSup: false})


    await ctx.render('essay1',{
        data: results
    })


})



module.exports = router
