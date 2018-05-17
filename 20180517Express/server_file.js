const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs')
const pathLib = require('path');

var server = express();

// server.use(bodyParser.urlencoded({extended:false}));
// 上传文件保存到指定路径
var objMulter =multer({dest : './www/upload'});
server.use(objMulter.any());

server.post('/', function(req, res) {
    // console.log(req.files);
    console.log(req.files[0]);
    // 获取文件名 req.files[0].originalname
    // 构造新文件名
    var newName = req.files[0].path +pathLib.parse(req.files[0].originalname).ext;
    //2 重命名
    fs.rename(req.files[0].path,newName,function(err){
        if(err) {
            res.send('上传失败！');
        } else{
            res.send('成功');
        }
    })
})
server.listen(8080);
