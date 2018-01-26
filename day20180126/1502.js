/**
 * Created by Nz on 2018/1/26.
 */
var MongoClient = require('mongodb').MongoClient
const DB_CONN_STR = 'mongodb://localhost:27017'

var insertData = function (db,callback) {
    var collection = db.collection('sites')
    var data = [
        {
            "name":'jianghui',
            "email":"nz.jianghui@gmail.com"
        }
    ]
    collection.insert(data,function (err,result) {
        if(err){
            console.log('Error',err)
            return
        }
        callback(result)
    })
}
MongoClient.connect(DB_CONN_STR,function (err,db) {
    console.log('连接成功')
    insertData(db.db('jianghui'),function (result) {
        console.log(result)
        db.close()
    })
})
