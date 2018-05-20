const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
// const ejs = require('ejs');
// const jade = require('jade');

var server = express();

server.listen(8080);

// 1 解析 cookie
server.use(cookieParser('xiao111'));
// 2 使用session
var arr =[];
for (var i=0; i<10000; i++) {
    arr.push('keys_'+Math.random());
}
server.use(cookieParser({name: 'xiao_sesss_id', keys: arr, maxAge: 2*3600*1000}));

// post 数据
server.use(bodyParser.urlencoded({extended: false}));
server.use(multer({dest:'./www/upload'}).any());

// 4.配置模板引擎
// 输出什么东西 可以设置多个
server.set('view engine','html'); // view engine 视图引擎
// 模板文件放在哪儿
server.set('views', './views');
// 使用哪种模板引擎
server.engine('html', consolidate.ejs);

//接收用户请求
server.get('/index', function (req, res){
    res.render('1.ejs', {name: '张三'});
  });

server.use(static('./www'));

