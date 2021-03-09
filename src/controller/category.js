/**
 * @description 栏目 controller
 * @author me
 * */


const {
    createCategory,
    getForumCategory
} = require('../services/category')

const { SuccessModel, ErrorModel } = require('../db/model/ResModel')

const {
    createCategoryFailInfo,
    findCategoryFailInfo
} = require('../db/model/ErrorInfo')

async function addCategory(name) {
    try {
        const result = await createCategory(name);

        return new SuccessModel(result);

    }catch (e) {
        return new ErrorModel(createCategoryFailInfo);
    }
}


async function findForumCategory(){
    const result = await getForumCategory();

    if(result.length > 0){
        return new SuccessModel(result);
    }else {
        return new ErrorModel(findCategoryFailInfo);
    }
}

module.exports = {
    addCategory,
    findForumCategory
}