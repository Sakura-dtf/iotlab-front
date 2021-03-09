/**
 * @description 用户数据模型
 * @author me
 * */

const seq = require('../seq');

const { STRING, DECIMAL } = require('../type');

const User =  seq.define('user',{
    username: {
        type: STRING,
        allowNull: false,
        unique: true,  //唯一
        comment: '用户名，唯一'
    },
    password: {
        type: STRING,
        allowNull: false,
        comment: '密码'
    },
    name:{
        type: STRING,
        allowNull: false,
        comment: '真实姓名'
    },
    isSuper:{
        type: DECIMAL,
        allowNull: false,
        defaultValue: 0,
        comment: '是否是超级管理员 0 普通用户  1 超级管理员'
    },
    avatar:{
        type: STRING,
        defaultValue: null,
        allowNull:true,
        comment: '缩略图地址'
    },
    payment: {
        type: STRING,
        defaultValue: null,
        allowNull:true,
        comment: '付款码图片地址'
    }
})


module.exports = User