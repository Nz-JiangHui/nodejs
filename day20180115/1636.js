/**
 * Created by Nz on 2018/1/15.
 */
var fs = require('fs')

var data = '我的输出'

var writeStream = fs.createWriteStream('output.txt')

writeStream.write(data,'utf8')
writeStream.end()

writeStream.on('finish',function () {
    console.log('写入完成')
})

writeStream.on('error',function (err) {
    console.log(err.stack)
})

console.log('程序执行完毕')
