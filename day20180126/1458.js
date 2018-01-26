/**
 * Created by Nz on 2018/1/26.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
console.log('开始');
MongoClient.connect(url,function (err,db) {
    if(err) throw err;
    console.log('数据库已创建')
    db.close()
})