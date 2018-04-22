const http=require('http');
const querystring=require('querystring');

http.createServer(
    (req, res) =>{
        var get ={};
        let url = req.url;
        if(url.indexOf('?') ==-1) {
        } else {
            console.log(2);
            let arr1 = req.url.split('?');
            get = querystring.parse(arr1[1]);
        }
        console.log(url, get)
        res.end();
    }    
).listen(8080);