const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');


var server = express();

var arr =[]; // 为了安全
for (i =0;i<10000;i++){
    arr.push('sig_'+Math.random());
}
server.use(cookieParser());
server.use(cookieSession({
    name: 'sess',
    keys: arr, // ['aaa','bbb','ccc'],
    maxAge: 2*3600*1000 // session 有效期
}));


server.use('/', function(req, res){
    console.log(req.session);
    if(req.session['count'] == null){
        req.session['count']=1;
    } else {
        req.session['count']++;
    }
    // console.log(req.session['count']);
    res.send('ok');
});

server.listen(8080);
