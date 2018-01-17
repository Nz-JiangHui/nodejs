/**
 * Created by Nz on 2018/1/17.
 */
var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function (req,res) {
    var pathname = url.parse(req.url).pathname

    console.log('Request for '+ pathname + 'received.')

    fs.readFile(pathname.substr(1),function (err,data) {
        if(err){
            console.error(err)
            res.writeHead(404,{
                'Content-Type':'text/html;charset=utf8'
            })
        }else {
            res.writeHead(200,{
                'Content-Type':'text/html;charset=utf8'
            })
            res.write(data.toString())
        }
        res.end();
    })
}).listen(5011)