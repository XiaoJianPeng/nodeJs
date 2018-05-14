const express = require('express');

var server = express();

server.use('/', function(req, res){
    res.cookie('user','blue', {path:'/', maxAge:24*60*60*1000});
    res.send('ok');
});

server.listen(8080);
