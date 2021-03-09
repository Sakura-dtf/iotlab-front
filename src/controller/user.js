/**
 * @description 用户 controller
 * @author me
 * */


const {
    createUser,
    getAllUser,
    getAllUserCount,
    getUserInfo,
    findOneUserFailInfo,
    getUserArticleCount
} = require('../services/user')

const { SuccessModel, ErrorModel } = require('../db/model/ResModel')



const {
    createUserFailInfo,
    findAllUserFailInfo
} = require('../db/model/ErrorInfo')

async function addUser( { username, name, password, avatar = null } ) {
    try {
        const result = await  createUser({ username, name, password, avatar });

        return new SuccessModel(result);

    }catch (e) {
        return new ErrorModel(createUserFailInfo);
    }
}


/**
 * 获取第一第二页的用户
 * */
async function findAllUser(){
    const result = await getAllUser(0,12);
    const count = await getAllUserCount();

    let data = {userList: result};
    data.pageTotal = (count - 12) % 4 + 1;

    if(result.length > 0){
        return new SuccessModel(data);
    }
    return new ErrorModel(findAllUserFailInfo)
}


/**
 * 获取更多用户的html字符串
 * @param{Number} pageIndex 页数
 * @param{Number} pageSize 每页数量
 * */
async function getLoadMore(pageIndex,pageSize){
    return await getAllUser(pageIndex, pageSize)
}


/**
 * 根据id获取用户信息
 * @param{Number} id*/
async function findUserInfoById(id){
    const results = getUserInfo(id);
    if(results){
        return new ErrorModel(results);
    }else {
        return new ErrorModel(findOneUserFailInfo);
    }
}

async function findUserArticleCount(userId){
    await getUserArticleCount(userId);
}

module.exports = {
    addUser,
    findAllUser,
    getLoadMore,
    findUserInfoById,
    findUserArticleCount
}

