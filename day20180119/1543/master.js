/**
 * Created by Nz on 2018/1/19.
 */
const fs = require('fs')
const child_process = require('child_process')

for(let i=0;i<3;i++){
    let workerProcess = child_process.spawn('node',['support.js',i])
    workerProcess.stdout.on('data',function (data) {
        console.log('stdout: '+data)
    })

    workerProcess.stderr.on('data',function (data) {
        console.log('stderr: '+data)
    })

    workerProcess.on('close',function (code) {
        console.log('子进程已退出， 退出码 '+code)
    })
}