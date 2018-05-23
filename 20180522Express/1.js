const mysql = require('mysql');

// 1.连接
// createConnection(哪台服务器，用户名，密码，库)
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'xiao',
    database: 'test'
});

// 2.查询
db.query("INSERT INTO `user` (`name`,`password`) VALUES ('test2', '13213')", (err, data) => {
    if (err) {
        console.log('出错了', err);
    } else {
        let strJson = JSON.stringify(data);
        console.log('成功了', data);
        console.log(strJson);
    }
});