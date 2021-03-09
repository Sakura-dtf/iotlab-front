/**
 * @description 栏目 services
 * @author me
 * */


const { Category } = require('../db/model/index');

const Op = require('sequelize').Op;

/**
 * @param{String} name 栏目名称
 * */

async function createCategory( name ) {

    const result = await Category.create({
        name
    })

    return result.dataValues;
}



async function getForumCategory(){
    const results = await Category.findAll({
        where: {
            id: {
                [Op.gt]: 6
            }
        },
        attributes: ['id','name']
    });

    return results.map(result => result.dataValues);
}

module.exports = {
    createCategory,
    getForumCategory
}

