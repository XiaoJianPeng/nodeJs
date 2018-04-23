/**
 * 使用 post、get、fs、 http、querystring、url结合搭建服务器
 */
const http =require('http');
const fs = require('fs');
const querystring=require('querystring');
const urlLib = require('url');

var server = http.createServer(
    (req, res) =>{
        // GET
        var obj = urlLib.parse(req.url, true);
        var url = obj.pathname;
        const _get = obj.query;

        // post 
        var str ='';
        req.on('data',
            data => {
                str += data
            }
        );
        req.on('end',() =>{
            const _post = querystring.parse(str);
            console.log(url,_get,_post);
            /*
            url ----要什么
            _get  ---get数据
            _post ---post 数据
            */
           // 文件请求
           var file_name = './www'+url;
           fs.readFile(file_name, 
            (err,data) => {
                if(err) {
                    res.write('404');
                } else {
                    res.write(data);
                }
                res.end();
            });
        })
    }
);

server.listen(8080);
