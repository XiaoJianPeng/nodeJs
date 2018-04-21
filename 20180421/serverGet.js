const http = require('http')

http.createServer(
    (req, res) =>{
        var get ={};
        let url = req.url;
        if(url.indexOf('?') ==-1) {
        } else {
            console.log(2);
            let arr1 = req.url.split('?');
            let arr2 = arr1[1].split('&')
            arr2.forEach(
                item => {
                    let arr3 = item.split('=');
                    get[arr3[0]] =arr3[1];
                }
            )
        }
        console.log(url, get)
        res.end();
    }    
).listen(8080);