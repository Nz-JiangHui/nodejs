/**
 * Created by Nz on 2018/1/15.
 */
var events = require('events')
var emitter = new events.EventEmitter()
var listener1 = function () {
    console.log('监听器 listener1 执行。')
}
var listener2 = function () {
    console.log('监听器 listener2 执行。')
}

emitter.addListener('connection',listener1)
emitter.on('connection',listener2)

var eventListeners = require('events').EventEmitter.listenerCount(emitter,'connection')
console.log(eventListeners+'个监听器连接事件。')

emitter.emit('connection')

emitter.removeListener('connection',listener1)
console.log('listener1 不在受监听。')


emitter.emit('connection')

eventListeners = require('events').EventEmitter.listenerCount(emitter,'connection')
console.log(eventListeners+'个监听器监听connection事件。')

console.log('程序执行完毕。')