/**
 * Created by Nz on 2018/1/19.
 */
var mysql  = require('mysql')

var connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'jianghui',
    database:'jianghui'
})

connection.connect()

var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];

connection.query(modSql,modSqlParams,function (err,data) {
    if(err){
        console.log('UPDATE　ERROR - ' ,err.message)
        return
    }
    console.log('---------------------UPDATE----------------------')
    console.log('UPDATE affectedRows',data.affectedRows)
    console.log('--------------------------------------------------\n\n')
})

connection.end()
