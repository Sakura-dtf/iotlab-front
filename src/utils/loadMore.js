/**
 * @description 用户加载更多 相关的工具方法
 * @author me
 * */

const ejs= require('ejs');
const fs = require('fs');
const path = require('path');





const User_LIST_TPL = fs.readFileSync(
    path.join(__dirname,'..','views','widgets','user-list.ejs')
).toString();

/**
 *  返回html字符串
 * @param{Array} userList
 * @param {Number} pageIndex
 * */

function getUserListStr(userList,pageIndex) {
    console.log(userList);
    return ejs.render(User_LIST_TPL,{
        data: userList,
        pageIndex
    })
}





const Result_LIST_TPL = fs.readFileSync(
    path.join(__dirname,'..','views','widgets','result-list.ejs')
).toString();

/**
 *  返回html字符串
 * @param{Array} articleList
 * */

function getResultListStr(articleList) {
    console.log(articleList);
    return ejs.render( Result_LIST_TPL,{
        data: articleList,
    })
}



const Forum_LIST_TPL = fs.readFileSync(
    path.join(__dirname,'..','views','widgets','forum-list.ejs')
).toString();

/**
 *  返回html字符串
 * @param{Array} articleList
 * */
function getForumListStr(articleList){
    console.log(articleList);
    return ejs.render(Forum_LIST_TPL,{
        data: articleList,
    })
}





const Photo_LIST_TPL = fs.readFileSync(
    path.join(__dirname,'..','views','widgets','photo-list.ejs')
).toString();

/**
 *  返回html字符串
 * @param{Array} photoList
 * */
function getPhotoListStr(photoList){
    console.log(photoList);
    return ejs.render(Photo_LIST_TPL,{
        data: photoList,
    })
}

module.exports = {
    getUserListStr,
    getResultListStr,
    getForumListStr,
    getPhotoListStr
}
