/**
 * Created by Nz on 2018/1/26.
 */
var MongoClient = require('mongodb').MongoClient
var DB_CONN_STR = 'mongodb://localhost:27017'

var selectData = function (db,callback) {
    var collection = db.collection('sites')
    var whereStr = {
        name:'jianghui'
    }
    collection.find(whereStr).toArray(function (err, result) {
        if(err){
            console.log('Error',err)
            return
        }
        callback(result)
    })
}

MongoClient.connect(DB_CONN_STR,function (err,db) {
    console.log('连接成功')
    selectData(db.db('jianghui'),function (res) {
        console.log(res)
        db.close()
    })
})