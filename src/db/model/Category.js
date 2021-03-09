/**
 * @description 栏目模型
 * @author me
 * */


const seq = require('../seq');

const { STRING, INTEGER, DECIMAL } = require('../type');


const Category = seq.define('category', {
    name: {
        type: STRING,
        allowNull: false,
        unique: true,  //唯一
        comment: '栏目名称 默认 通知文章 -- 1 项目文章 -- 2  自传文章 -- 3 科学竞赛 -- 4 社会服务 -- 5 科学研究 -- 6'
    }
})



module.exports = Category
