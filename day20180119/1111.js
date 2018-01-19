/**
 * Created by Nz on 2018/1/19.
 */
var express = require('express')
var app = express()

app.get('/',function (req,res) {
    console.log('主页 GET 请求')
    res.send('Hello GET')
})

app.post('/',function (req,res) {
    console.log('主页 POST 请求')
    res.send('Hello Post')
})

app.get('/list_user',function (req,res) {
    console.log('/list_user GET 请求')
    res.send('用户列表页面')
})

app.get('/ab*cd',function (req,res) {
    console.log('/ab*cd GET 请求')
    res.send('正则匹配')
})

var server = app.listen('5011',function () {
    var host = server.address().address
    var port = server.address().port

    console.log('应用实例，访问地址为 http://%s:%s',host,port)
})
