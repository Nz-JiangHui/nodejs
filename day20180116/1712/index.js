/**
 * Created by Nz on 2018/1/16.
 */
var http = require('http')
var url = require('url')
var util = require('util')

http.createServer(function (req,res) {
    res.writeHead(200,{
        'Content-Type':'text/plain;charset=utf-8'
    })
    res.end(util.inspect(url.parse(req.url,true)))
}).listen(5011)