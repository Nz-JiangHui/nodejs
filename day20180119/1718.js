/**
 * Created by Nz on 2018/1/19.
 */
var mysql = require('mysql')

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'jianghui',
    port:3306,
    database:'jianghui'
})

connection.query('SELECT * FROM websites',function (err,data) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message)
        return;
    }
    console.log('---------------SELECT-------------')
    console.log('我的第一个mysql获取取数据')
    console.log(data)
    console.log('----------------------------------\n\n')
})

connection.end()