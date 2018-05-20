const express = require('express');

var server =express();
// 目录1 /user/
 // 1 先创建router
var routeUser = express.Router();
// 指定router目录
server.use('/user', routeUser);
// 接收请求  可以接受 get post 请求
routeUser.get('/1.html', function(req, res) {
    res.send('user1');
})

routeUser.get('/2.html', function(req, res) {
    res.send('user2');
})

// 目录2 /article/
var routeArticle = express.Router();
routeArticle.get('/art1.html', function(req, res) {
    res.send('art1');
})
routeArticle.get('/art2.html', function(req, res) {
    res.send('art2');
})
server.use('/article', routeArticle);

server.listen('8080');
