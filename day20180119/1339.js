/**
 * Created by Nz on 2018/1/19.
 */
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var urlencodeParser = bodyParser.urlencoded({extended: true})

app.use(express.static('public'))

app.get('/index.htm*', function (req, res) {
    res.sendFile(__dirname + '/' + 'index.html')
})

app.get('/process_get', function (req, res) {
    var response = {
        'first_name': req.query.first_name,
        'last_name': req.query.last_name
    }
    console.log(response)
    res.end(JSON.stringify(response))
})

app.post('/process_post', urlencodeParser, function (req, res) {
    var response = {
        'first_name': req.body.first_name_post,
        'last_name': req.body.last_name_post
    }
    console.log(response)
    res.end(JSON.stringify(response))
})

var server = app.listen(5011, function () {
    var host = server.address().address
    var port = server.address().port

    console.log('应用访问实例 http://%s:%s', host, port)
})