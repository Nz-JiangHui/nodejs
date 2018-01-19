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

connection.query('INSERT INTO websites(id,name,url,alexa,country) VALUES(0,?,?,?,?)',['姜会','jianghui',666,'CN'],function (err,data) {
    if(err){
        console.log('[INSERT ERROR - ',err.message)
        return;
    }

    console.log('---------------------------------INSERT---------------------------')
    console.log('INSERT ID: ',data)
    console.log('------------------------------------------------------------------\n\n')
})
connection.end()