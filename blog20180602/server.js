const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
const ejs = require('ejs');
const mysql = require('mysql')
// const jade = require('jade');

var server = express();

server.listen(8080);

// 1 解析 cookie
server.use(cookieParser('xiao'));
// 2 使用session
var arr =[];
for (var i=0; i<10000; i++) {
    arr.push('keys_'+Math.random());
}
server.use(cookieParser({name: 'xiao_sesss_id', keys: arr, maxAge: 2*3600*1000}));
// 连接池
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'xiao',
    database: 'test'
});
// post 数据
// server.use(bodyParser.urlencoded({extended: false}));
// server.use(multer({dest:'./www/upload'}).any());

// 4.配置模板引擎
// 输出什么东西 可以设置多个
server.set('view engine','html'); // view engine 视图引擎
// 模板文件放在哪儿
server.set('views', './template');
// 使用哪种模板引擎
server.engine('html', consolidate.ejs);


//接收用户请求
server.get('/', function (req, res){
    db.query("SELECT * FROM banner_table", (err, data)=> {
        if(err) {
            res.status(500).send('数据库内部错误').end()
        } else {
            console.log(data[0])
            res.render('index.ejs', {banners: data})
        }
    });
  });

server.use(static('./www'));

