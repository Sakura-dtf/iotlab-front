const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const indexViewRoute = require('./routes/view/index');
const membersViewRoute = require('./routes/view/members')
const forumViewRoute = require('./routes/view/forum')
const resultsViewRoute = require('./routes/view/results')
const essay1ViewRoute = require('./routes/view/essay1')
const essay2ViewRoute = require('./routes/view/essay2')
const notifyViewRoute = require('./routes/view/notify')
const searchViewRoute = require('./routes/view/search')
const userViewRoute = require('./routes/view/user')
const photoViewRoute = require('./routes/view/photo')

const loadMoreApiRoute = require('./routes/api/loadMore');
const artcleApiRoute = require('./routes/api/article');
const categoryApiRoute = require('./routes/api/category');
const userApiRoute = require('./routes/api/user');
const essayApiRoute = require('./routes/api/essay');


// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


// routes

app.use(indexViewRoute.routes(), indexViewRoute.allowedMethods());
app.use(membersViewRoute.routes(), membersViewRoute.allowedMethods());
app.use(forumViewRoute.routes(), forumViewRoute.allowedMethods());
app.use(resultsViewRoute.routes(), resultsViewRoute.allowedMethods());
app.use(essay1ViewRoute.routes(), essay1ViewRoute.allowedMethods());
app.use(essay2ViewRoute.routes(), essay2ViewRoute.allowedMethods());
app.use(notifyViewRoute.routes(), notifyViewRoute.allowedMethods());
app.use(searchViewRoute.routes(), searchViewRoute.allowedMethods());
app.use(userViewRoute.routes(), userViewRoute.allowedMethods());
app.use(photoViewRoute.routes(), photoViewRoute.allowedMethods());


app.use(artcleApiRoute.routes(), artcleApiRoute.allowedMethods());
app.use(userApiRoute.routes(), userApiRoute.allowedMethods());
app.use(categoryApiRoute.routes(), categoryApiRoute.allowedMethods());
app.use(loadMoreApiRoute.routes(), loadMoreApiRoute.allowedMethods());
app.use(essayApiRoute.routes(), essayApiRoute.allowedMethods());


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
