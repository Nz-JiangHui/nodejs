/**
 * Created by Nz on 2018/1/15.
 */
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {
        'content-type': 'text/plain'
    })

    response.end('hello world\n')
}).listen(5011)