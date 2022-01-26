function createRouter(router,db){
  router.get('/11',function(ctx){
    console.log(db.insert)
    ctx.body = 'hi 123'
  })
}
exports.loadUserRouter = createRouter