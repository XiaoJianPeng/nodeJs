/**
 * 使用 post、get、fs、 http、querystring、url结合搭建服务器
 */
const http =require('http');
const fs = require('fs');
const querystring=require('querystring');
const urlLib = require('url');

var server = http.createServer(
    (req, res) =>{
        // get
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
            // 写入文件
            fs.writeFile('postLog.txt', str, function(err,data){
                if(err) {
                    res.write('post数据写入失败！');
                }else {
                    res.write('文件写入成功！')
                }
                res.end();
            });

        })
    }
)

server.listen(8080);
