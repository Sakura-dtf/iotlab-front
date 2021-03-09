/**
 * @description 图片 controller
 * @author me
 * */


const { getAllPhoto , getAllLBT} = require('../services/photo')

const { SuccessModel, ErrorModel } = require('../db/model/ResModel')

const {
    findPhotoFailInfo,
    findLBTFailInfo
} = require('../db/model/ErrorInfo')



async function findAllPhoto(pageIndex = 0, pageSize = 5){
    const res = await getAllPhoto(pageIndex , pageSize);
    if(res){
        return new SuccessModel(res);
    }else{
        return new ErrorModel(findPhotoFailInfo);
    }
}

/**
 * 获取更多图片的html字符串
 * @param{Number} pageIndex 页数
 * @param{Number} pageSize 每页数量
 * */
async function getPhotoLoadMore({pageIndex,pageSize}){
    return await getAllPhoto(pageIndex, pageSize)
}

async function findAllLBT(){
    const res = await getAllLBT();
    if(res){
        return new SuccessModel(res);
    }else {
        return new ErrorModel(findLBTFailInfo)
    }
}


module.exports = {
    findAllPhoto,
    getPhotoLoadMore,
    findAllLBT
}