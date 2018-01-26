/**
 * Created by Nz on 2018/1/26.
 */
var MongoClient = require('mongodb').MongoClient
var DB_CONN_STR = 'mongodb://localhost'

var delData = function (db,callback) {
    var collection = db.collection('sites')
    var whereStr = {
        name:'jianghui'
    }
    collection.remove(whereStr,function (err,result) {
        if(err){
            return console.log('Err',err)
        }
        callback(result)
    })
}
MongoClient.connect(DB_CONN_STR,function (err,db) {
    console.log('连接成功')
    delData(db.db('jianghui'),function (result) {
        console.log(result)
        db.close()
    })
})