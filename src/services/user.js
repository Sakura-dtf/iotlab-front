/**
 * @description 用户 services
 * @author me
 * */


const { User,Article } = require('../db/model/index');


/**
 * @param{Object} 用户对象 必须包括 username, name, password
 * */

async function createUser( { username, name, password, avatar }) {

    let data = { username, name, password }

    if(avatar){
        data.avatar = avatar
    }
    const result = await User.create({
        username,
        password,
        name,
        avatar
    })


    return result.dataValues;
}

/**
 * 获取用户
 * @param{Number} pageIndex 页数
 * @param{Number} pageSize 每页数量
 * */
async function getAllUser(pageIndex = 0,pageSize= 5){


    const result = await User.findAll({
        limit: pageSize,
        offset: pageIndex * pageSize,
        attributes:['id','name','avatar'],
        where:{
            isSuper: 0
        }
    })

    return result.map(result => result.dataValues)

}


/**
 * 获取用户数量
 * */
async function getAllUserCount(){
    const result = await User.findAndCountAll({
        attributes:['id'],
    })

    return result.count;
}

/**
 * 获取用户信息
 * @param{Number} id userId
 * */
async function getUserInfo(id){
    const results = await User.findOne({
        where: {
            id
        }
    })
    console.log(results);
    return results.dataValues;
}

/**
 * 根据用户id获取用户的文章数量
 * @param{Number} userId
 * */
async function getUserArticleCount(userId){
    const res = await Article.findAndCountAll({
        attributes:['id'],
        where:{
            userId
        }
    })

    console.log(res.count);

    return res.count;
}

module.exports = {
    createUser,
    getAllUser,
    getAllUserCount,
    getUserInfo,
    getUserArticleCount
}

