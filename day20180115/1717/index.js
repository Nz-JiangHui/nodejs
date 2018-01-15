/**
 * Created by Nz on 2018/1/15.
 */
var http = require('http')

function onRequest(req,res) {
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('Hello World')
    res.end()
}

http.createServer(onRequest).listen(5011)