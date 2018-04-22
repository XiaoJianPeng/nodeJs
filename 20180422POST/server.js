const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, res) => {
    // post --req
    var str ='';
    var i=0;
    // data -- 有一段数据到达 (执行多次)
    req.on('data',
        data => {
            console.log(`第${i++}次收到数据`);
            str+=data;
        }
    );
    // end -- 数据全部到达 执行一次
    req.on('end',function(){
        console.log('数据接收完毕！');
        var postjs = querystring.parse(str);
        console.log(postjs);
        // 写入文件
        fs.writeFile('bbb.txt', str, function(err,data){
            if(err) {
                console.log(err)
            }else {
                console.log('文件写入成功！')
            }
        })
    })
    // req.end();
}).listen(8080);
