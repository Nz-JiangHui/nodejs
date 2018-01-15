/**
 * Created by Nz on 2018/1/15.
 */
var exress = require('express')

var fs = require('fs')
/*var data = fs.readFileSync('input.txt')
console.log(data.toString() + 'sync')*/
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err)
    console.log(data.toString())
})
console.log('程序执行结束')