const express = require('express');
const cookieParser = require('cookie-parser');


var server = express();

server.use(cookieParser('xiao'));

server.use('/', function(req, res){
    res.clearCookie('user');
    res.send('ok');
});

server.listen(8080);
