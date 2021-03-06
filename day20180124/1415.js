/**
 * Created by Nz on 2018/1/24.
 */
var Client = require('ssh2').Client;

var conn = new Client();
conn.on('ready', function() {
    console.log('Client :: ready');
    conn.exec('./release.sh', function(err, stream) {
        if (err) throw err;
        stream.on('close', function(code, signal) {
            console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
            conn.end();
        }).on('data', function(data) {
            console.log('STDOUT: ' + data);
        }).stderr.on('data', function(data) {
            console.log('STDERR: ' + data);
        });
    });
}).connect({
    host: '',
    port: 22,
    username: '',
    privateKey:require('fs').readFileSync('')
});