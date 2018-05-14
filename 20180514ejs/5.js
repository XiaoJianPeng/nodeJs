const ejs = require('ejs');

ejs.renderFile('./views/5.ejs', {
    type:'user'
}, function(err, data){
    console.log(data);
})