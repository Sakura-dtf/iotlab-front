/**
 * @description PDF数据模型
 * @author me
 * */

const seq = require('../seq');

const { STRING, DECIMAL,INTEGER } = require('../type');

const Pdf =  seq.define('pdf',{
    userId: {
        type: INTEGER,
        allowNull: false,
        comment: '用户 ID'
    },
    money: {
        type: INTEGER,
        allowNull: false,
        comment: '金额'
    },
    title: {
        type: STRING,
        allowNull: false,
        comment: '商品信息',
    },
    image: {
        type: STRING,
        allowNull:false,
        comment: 'pdf地址'
    },
    jtImage: {
        type: STRING,
        allowNull:true,
        comment: '金额大于200 的截图地址'
    },
    isZT: {
        type: DECIMAL,
        allowNull: false,
        defaultValue: 0,
        comment: ' 审核中 0 审核通过 1 已返现 2',
    }
})


module.exports = Pdf