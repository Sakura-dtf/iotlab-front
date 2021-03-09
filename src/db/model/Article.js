/**
 * @description 文章数据模型
 * @author me
 * */


const seq = require('../seq');

const { STRING, TEXT, INTEGER, DECIMAL, } = require('../type');


const Article = seq.define('article', {
    userId: {
        type: INTEGER,
        allowNull: false,
        comment: '用户 ID'
    },
    categoryId: {
        type: INTEGER,
        allowNull: false,
        comment: '栏目 ID'
    },
    title:{
        type: STRING,
        allowNull: false,
        comment: '文章标题内容'
    },
    describe: {
        type: STRING,
        allowNull: true,
        comment: '文章描述内容'
    },
    content: {
        type: TEXT,
        allowNull: false,
        comment: '文章内容'
    },
    image: {
        type: STRING,
        defaultValue: null,
        allowNull:true,
        comment: '缩略图地址'
    },
    readNum:{
        type: INTEGER,
        defaultValue: 0,
        comment: '阅读量 默认值为零',
    },
    index: {
        type: DECIMAL,
        allowNull: false,
        defaultValue: 0,
        comment: '通知文章 -- 1 项目文章 -- 2  自传文章 -- 3 成果文章 -- 4 学术文章 -- 5'
    }
})

module.exports = Article
