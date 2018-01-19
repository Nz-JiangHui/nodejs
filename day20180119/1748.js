/**
 * Created by Nz on 2018/1/19.
 */
var mysql = require('mysql')

var connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    database:'jianghui',
    user:'root',
    password:'jianghui'
})

connection.connect()

var delSql = 'DELETE FROM websites where id=6';
connection.query(delSql,function (err,data) {
    if(err){
        console.log('error',err.message)
        return
    }

    console.log('-----------------------DELETE------------------------')
    console.log("DELETE："+data.affectedRows)
    console.log('-----------------------------------------------------\n\n')
})
connection.end()