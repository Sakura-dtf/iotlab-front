const router = require('koa-router')()
const moment = require('moment');

const {findAllLBT} = require("../../controller/photo");

const { findAllArticle } = require('../../controller/article')

router.prefix('/notify')

router.get('/:pageIndex', async (ctx, next) => {

    const pageIndex = parseInt(ctx.params.pageIndex);

    let results = await findAllArticle({index: 1, pageIndex, pageSize: 10});

    let hots = await findAllArticle({index: 1, pageIndex: 0, pageSize: 6,order: true});

    let photo = await findAllLBT();

    console.log(23465,photo);

    if(results.data){
        results.data.results.map(item => {
            item.createdAt = moment(item.createdAt,'YYYY-MM-DD h:mm:ss').format('YYYY-MM-DD');
        })

        let pageTotal = Math.ceil(results.data.count / 10 );



        await ctx.render('notify',{
            data: results,
            photo,
            pageTotal,
            pageIndex,
            hots
        })
    }else {
        console.log(111)
        await ctx.render('notify',{
            data: null,
            photo,
            pageTotal: 0,
            pageIndex,
            hots
        })

    }


})



module.exports = router
