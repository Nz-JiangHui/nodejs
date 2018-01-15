/**
 * Created by Nz on 2018/1/15.
 */
var util = require('util')

function Person() {
    this.name = 'byvoid'
    this.toString = function () {
        return this.name
    }
}

var obj = new Person()
console.log(util.inspect(obj))
console.log(util.inspect(obj, true))

util.isArray([])//true
var arr = util.isArray(new Array)//true
console.log(arr)
util.isArray({})

util.isRegExp(/some regexp/)
util.isRegExp(new RegExp('another regexp'))//true
util.isRegExp({})//false

util.isDate(new Date())//true
util.isDate(Date())//false
util.isDate({})//false

util.isError(new Error())//true
util.isError(new TypeError())//true
util.isError({name:'Error',message:'an error occurred'})//false