/**
 * @description 失败信息集合，包括errno和message
 * @author me
 * */


module.exports = {
    tokenFailInfo: {
        errno: 1000,
        message: '没有携带token，或者token失效'
    },
    createArticleFailInfo:{
        errno: 1001,
        message: '创建文章失败'
    },
    createCategoryFailInfo: {
        errno: 1002,
        message: '创建栏目失败'
    },
    createUserFailInfo: {
        errno: 1003,
        message: '创建用户失败'
    },
    findAllUserFailInfo: {
        errno: 1004,
        message: '查询所有用户失败'
    },
    findArticleFailInfo: {
        errno: 1005,
        message: '查询文章失败'
    },
    findCategoryFailInfo: {
        errno: 1006,
        message: '查询栏目失败'
    },
    findOneUserFailInfo: {
        errno: 1007,
        message: '查询用户失败'
    },
    findArticleInfoFailInfo:{
        errno: 1008,
        message: '查询具体文章信息失败'
    },
    loginFailInfo: {
        errno: 1009,
        message: '登录失败，请查看用户名或者密码是否正确'
    },
    setFailInfo: {
        errno: 1010,
        message: '修改用户失败'
    },
    deleteFailInfo: {
        errno: 1011,
        message: '删除用户失败,请查看该用户文章是否删除干净'
    },
    setArticleFailInfo: {
        errno: 1012,
        message: '修改文章失败'
    },
    deleteArticleFailInfo:  {
        errno: 1013,
        message: '删除文章失败'
    },
    uploadFileFailInfo: {
        errno: 1014,
        message: '上传文件成功'
    },
    photoAddFailInfo: {
        errno: 1015,
        message: '添加图片成功'
    },
    photoDeleteFailInfo: {
        errno: 1016,
        message: '删除图片成功'
    },
    setPhotoFailInfo: {
        errno: 1016,
        message: '删除图片成功'
    },
    findPhotoFailInfo: {
        errno: 1017,
        message: '删除图片成功'
    },
    findLBTFailInfo: {
        errno: 1018,
        message: '删除图片成功'
    }

}