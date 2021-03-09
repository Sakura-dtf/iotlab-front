/**
 * @description 文章 test
 * @author me
 */

const moment = require('moment');
const server = require('./server');

const name = '测试姓名' + moment(new Date()).format('YYYYMMDD hh:mm:ss');
const username = '测试用户名' + moment(new Date()).format('YYYYMMDD hh:mm:ss ');
const avatar = null /*'测试头像' + moment(Date()).format('MMMM Do YYYY, h:mm:ss a');*/
const password = '20001004dtf';

const categoryName = '测试栏目名' + moment(new Date()).format('YYYYMMDD hh:mm:ss');

const articleTitle = '测试文章标题' + moment(new Date()).format('YYYYMMDD');
const articledDescribe = '测试文章介绍' + moment(new Date()).format('YYYYMMDD');
const articledContent = '测试文章内容' + moment(new Date()).format('YYYYMMDD');
const articleImage = null /*'测试文章缩略图' + moment(new Date()).format('YYYYMMDD');*/

/*
test('创建用户，应该成功', async () => {
    const res = await server
        .post('/user/add')
        .send({
            name,
            username,
            password,
            avatar
        })
    console.log(res);
    expect(res.body.errno).toBe(0);
})
console.log(categoryName)

test('创建栏目，应该成功', async () => {
    const res = await server
        .post('/category/add')
        .send({
            name: categoryName
        })
    console.log(res);
    expect(res.body.errno).toBe(0);
})

*/



test('创建文章，应该成功', async () => {
    const res = await server
        .post('/article/add')
        .send({
            userId: 1,
            categoryId: 6,
            title: articleTitle,
            describe: articledDescribe,
            content: articledContent,
            index: 1,
            image: articleImage
        })
    console.log(res);
    expect(res.body.errno).toBe(0);
})
