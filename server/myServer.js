const http = require('http')
const fs = require('fs')
/**
 * 使用http + fs 配合搭建简单服务器
 */
var server = http.createServer(
    (req,res) =>{
        //req.url=>'/index.html'
        //读取=>'./www/index.html'
        //  './www'+req.url
        // 读取www目录下的文件
        var file_name = './www' + req.url;
        fs.readFile(file_name, function (err, data){
            if(err) {
                res.write('404');
            } else {
                console.log(data.toString())
                res.write(data);
            }
            res.end();
        })
    }
)

server.listen(8080); // 监听端口8080
