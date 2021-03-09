/**
 * @description 数据模型入口文件
 * @author me
 * */

const Article = require('./Article');
const Category = require('./Category');
const User = require('./User');
const Photo = require('./Photo');
const Pdf = require('./Pdf');

Article.belongsTo(User, {
    foreignKey: 'userId'
})



Article.belongsTo(Category, {
    foreignKey: 'categoryId'
})



Pdf.belongsTo(User,{
    foreignKey: 'userId'
})


module.exports = {
    Article,
    User,
    Category,
    Photo,
    Pdf
}