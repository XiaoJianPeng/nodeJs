// 自定义中间件
const querystring = require('querystring');

// 调用方法 调用 const bodyParser2 = require('./libs/my-body-parser');
// server.use(bodyParser2.aaa);
class mybodyParser {
    static aaa (req, res, next) {
        let str ='';
        req.on('data',function(data){
            str += data;
        })
        req.on('end',function(){
            req.body= querystring.parse(str);

            next();
        })
    }
}
module.exports = mybodyParser

// // // 调用 const bodyParser2 = require('./libs/my-body-parser'); 
// // server.use(bodyParser2)
// module.exports =function (req, res,next){
//     let str ='';
//     req.on('data',function(data){
//         str += data;
//     })
//     req.on('end',function(){
//         req.body= querystring.parse(str);

//         next();
//     })
// }

// // // 调用 const bodyParser2 = require('./libs/my-body-parser'); 
// // server.use(bodyParser2.myfunction())
// module.exports =function (){
//     return function(req, res,next) {
//         let str ='';
//         req.on('data',function(data){
//             str += data;
//         })
//         req.on('end',function(){
//             req.body= querystring.parse(str);
    
//             next();
//         })
//     }
// }
// // 调用 const bodyParser2 = require('./libs/my-body-parser');
// // server.use(bodyParser2.myfunction());
// module.exports ={
//     myfunction: function () {
//         return function(req, res,next) {
//             let str ='';
//             req.on('data',function(data){
//                 str += data;
//             })
//             req.on('end',function(){
//                 req.body= querystring.parse(str);
        
//                 next();
//             })
//         }
//     }
// }
