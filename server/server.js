const http=require('http');

var server=http.createServer(function (request, response){
  console.log('有人来了');
  console.log(request.url)
  response.write('asd')
  response.end()
});

//监听——等着
//端口-数字
server.listen(8080);
