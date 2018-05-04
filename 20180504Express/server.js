const express = require('express');
const expStatic = require('express-static');

var server = express();

server.listen(8080);

/* login?user=xxx&pass=xxx
    => 逻辑判断 
*/
var users = {
    'zhangsan': '123',
    'lisi': '321'
};

server.get('/login', function(req, res) {
    let user = req.query['user'];
    let pass = req.query['pass'];
    if(users[user] === undefined || users[user] === null) {
        res.send({ok:false, msg: '用户不存在！'});
    } else {
        if(users[user]!==pass) {
            res.send({ok:false, msg: '密码错误！'});
        } else {
            res.send({ok:true, msg: '登录成功！'});
        }
    }
});
server.get('/reg', function(req, res) {
    let user = req.query['user'];
    let pass = req.query['pass'];
    if(users[user]) {
        res.send({ok:false, msg: '用户已存在！'});
    } else {
        users[user] = pass;
        res.send({ok:true, msg: users});
    }
});

server.use(expStatic('./www'));


