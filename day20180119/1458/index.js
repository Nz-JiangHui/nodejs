/**
 * Created by Nz on 2018/1/19.
 */
var express= require('express')
var app = express()
var fs = require('fs')

app.get('/listUsers',function (req,res) {
    fs.readFile(__dirname+'/'+'users.json','utf8',function (err,data) {
        console.log(data)
        res.end(data)
    })
})
var user = {
    "user4":{
        "name":"mohit",
        "password":"password4",
        "profession":"teacher",
        "id":4
    }
}
app.get('/addUser',function (req,res) {
    fs.readFile(__dirname+'/'+'users.json','utf8',function (err,data) {
        data = JSON.parse(data)
        data['user4'] = user['user4']
        console.log(data)
        res.end(JSON.stringify(data))
    })
})

app.get('/getUser/:id',function (req,res) {
    fs.readFile(__dirname+'/'+'users.json','utf8',function (err,data) {
        data = JSON.parse(data)
        var user = data['user'+req.params.id]
        console.log(user)
        res.end(JSON.stringify(user))
    })
})


var id = 2;
app.get('/deleteUser',function (req,res) {
    fs.readFile(__dirname+'/'+'users.json','utf8',function (err,data) {
        data = JSON.parse(data)
        delete data['user'+id]
        console.log(data)
        res.end(JSON.stringify(data))
    })
})

var server = app.listen(5011,function () {
    var host = server.address().address;
    var port = server.address().port
    console.log('http://%s:%s',host,port)
})