/**
 * @description 用户 services
 * @author me
 * */


const { Photo } = require('../db/model/index');


/**
 * 获取图片
 * @param{Number} pageIndex 页数
 * @param{Number} pageSize 每页数量
 * */
async function getAllPhoto(pageIndex = 0,pageSize= 5){
    let data = {
        limit: pageSize,
        offset: pageIndex * pageSize,
    };

    data.attributes = ['id','title','image','isLBT']

    const result = await Photo.findAll(data);

    if(result.length > 0){
        return result.map(item => item.dataValues);
    }

    return result
}


async function getAllLBT(){
    let data = {
        where:{
            isLBT: 0
        }
    };
    data.attributes = ['id','title','image','isLBT']

    const result = await Photo.findAll(data);

    if(result.length > 0){
        return result.map(item => item.dataValues);
    }else {
        return result
    }
}


module.exports = {
    getAllPhoto,
    getAllLBT
}