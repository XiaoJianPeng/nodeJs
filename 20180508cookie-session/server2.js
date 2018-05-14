const express = require('express');
const cookieParser = require('cookie-parser');


var server = express();

server.use(cookieParser());

server.use('/', function(req, res){
    console.log(req.cookies);
    // res.cookie('user','blue', {path:'/', maxAge:24*60*60*1000});
    res.send('ok');
});

server.listen(8080);
