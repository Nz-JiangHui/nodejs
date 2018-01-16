/**
 * Created by Nz on 2018/1/16.
 */
var fs = require('fs')

console.log('准备打开文件')
fs.open('input.txt','r+',function (err,fd) {
    if(err){
        return console.error(err)
    }
    console.log('文件打开成功！')
})