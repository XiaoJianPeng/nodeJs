const http=require('http');
const urlLib=require('url');

http.createServer(
    (req, res) =>{
       
       var obj =urlLib.parse(req.url,true);
       var get =obj.query
       let url = obj.pathname;
        console.log(url, get)
        res.end();
    }    
).listen(8080);

// const urlLib=require('url');

// var obj=urlLib.parse("http://www.zhinengshe.com/index?a=12&b=5", true);

// console.log(obj.pathname, obj.query);
