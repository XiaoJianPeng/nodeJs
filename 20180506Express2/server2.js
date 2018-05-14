const express = require('express');
const bodyParser= require('body-parser');

var server = express();
server.listen(8080);

server.use(bodyParser.urlencoded({
    extended: true, // 扩展模式true
    limit: 2*1024*1024           // 限制2M
}));
// GET/POST
server.use('/', function(req,res){
    console.log(req.body);
});
