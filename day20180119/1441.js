/**
 * Created by Nz on 2018/1/19.
 */
var express=require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/',function (req,res) {
    console.log('Cookies: ',req.cookies)
    res.end(JSON.stringify(req.cookies))
})

app.listen(5011)