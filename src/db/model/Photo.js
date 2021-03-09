/**
 * @description 文章数据模型
 * @author me
 * */


const seq = require('../seq');

const { STRING, DECIMAL} = require('../type');


const Photo = seq.define('photo', {
    title:{
        type: STRING,
        allowNull: false,
        comment: '图片标题'
    },

    image: {
        type: STRING,
        defaultValue: null,
        allowNull:true,
        comment: '缩略图地址'
    },

    isLBT: {
        type: DECIMAL,
        allowNull: false,
        defaultValue: 0,
        comment: '是轮播图 0  不是轮播图 1',
    }
})

module.exports = Photo
