/**
 * Created by Nz on 2018/1/26.
 */
var MongoClient = require('mongodb').MongoClient
var DB_CONN_STR = 'mongodb://localhost:27017'

var updataData = function (db,callback) {
    var collection = db.collection('sites')
    var whereStr = {
        name:'jianghui'
    }
    var updateStr = {
        $set:{
            email:'jianghui@sina.com'
        }
    }
    collection.update(whereStr,updateStr,function (err,data) {
        if(err){
            return console.log('Err',err)
        }
        callback(data)
    })
}
MongoClient.connect(DB_CONN_STR,function (err,db) {
    console.log(err)
    updataData(db.db('jianghui'),function (result) {
        console.log(result)
        db.close()
    })
})