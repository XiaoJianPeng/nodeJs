const http=require('http');

var server=http.createServer(function (request, response){
  switch(request.url) {
      case '/1.html':
        response.write('111')
        break;
      case '/2.html':
        response.write('222')
        break;
    default:
        response.write('404')
        break;
  }
  response.end()
});

//监听——等着
//端口-数字
server.listen(8080);
