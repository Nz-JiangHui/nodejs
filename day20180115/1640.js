/**
 * Created by Nz on 2018/1/15.
 */
var fs = require('fs')

var readStream = fs.createReadStream('input.txt')

var writeStream = fs.createWriteStream('output.txt')

readStream.pipe(writeStream)
console.log('程序执行完毕')