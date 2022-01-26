const db  = require('mysql2')
const config = require('../config')
class sql {
  constructor(){
    try{
      db.createConnection(config)
    }catch(error){
      console.log(error)
    }
  }
  insert(){
    console.log(222)
  }
  update(){}
  delete(){}
  add(){}
}
exports.db = new sql()