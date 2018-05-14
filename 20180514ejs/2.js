const ejs = require('ejs');

ejs.renderFile('./views/2.ejs', {json:{
    name:'blue',
    arr:[
        {user:'a',pass:'111'},
        {user:'b',pass:'222'},
        {user:'c',pass:'333'},
        {user:'d',pass:'4444'}
    ]
}}, function(err, data){
    console.log(data);
})