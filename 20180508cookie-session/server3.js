const express = require('express');
const cookieParser = require('cookie-parser');


var server = express();

server.use(cookieParser('xiao'));

server.use('/', function(req, res){
    req.secret='xiao';
    res.cookie('user','blue',{signed: true}, {path:'/', maxAge:24*60*60*1000});
    console.log('无签名：', req.cookies);
    console.log('有签名：',req.signedCookies);
    res.send('ok');
});

server.listen(8080);
