/**
 * Created by Nz on 2018/1/19.
 */
var express = require('express')
var app = express()
var fs = require('fs')

var bodyParser = require('body-parser')
var multer = require('multer')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extend:false}))
app.use(multer({dest:'/tmp/'}).array('image'))

app.get('/index.htm*',function (req,res) {
    res.sendFile(__dirname+'/'+'index.html')
})

app.post('/file_upload',function (req,res) {
    console.log(req)
    console.log(req.files[0])
    var des_file = __dirname+'/'+req.files[0].originalname;
    fs.readFile(req.files[0].path,function (err,data) {
        fs.writeFile(des_file,data,function (err) {
            var response
            if(err){
                console.log(err)
            }else {
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                }
            }
            console.log(response)
            res.end(JSON.stringify(response))
        })
    })
})

var server = app.listen(5011,function () {
    var host = server.address().address
    var port = server.address().port

    console.log('http://%s:%s',host,port)
})