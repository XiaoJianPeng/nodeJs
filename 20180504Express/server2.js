const express = require('express');

var server = express();

server.use('/a.html', function (req, res) {
    // res.send('aaa'); 
    // 可以直接发送json对象
    res.send({a:2,b:3}); 
    res.end();
});
// server.use('/', function (req, res) {
//     console.log('user了');
//     res.end();
// });

server.get('/', function (req, res) {
    console.log('get了')
    res.end();
});
server.post('/', function (req, res) {
    // res.send('aaa'); 
    // 可以直接发送json对象
    console.log('post了'); 
    res.end();
});

server.listen(8080);
