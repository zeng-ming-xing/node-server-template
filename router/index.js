const Router = require('koa-router')
const { db } = require('../../mysql/index')
const { loadUserRouter } = require('./module/user')
const router = new Router()
loadUserRouter(router,db)
module.exports = router