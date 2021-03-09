const router = require('koa-router')()

const { addUser, findAllUser } = require('../../controller/user')

router.prefix('/user');

router.post('/add',  async (ctx,next) => {
    const { username, name, password, avatar } = ctx.request.body;

    console.log(username,name,password,avatar)

    ctx.body = await addUser({username, name, password, avatar})

})





module.exports = router
