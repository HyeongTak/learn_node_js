var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
    // 실제 요청한 주소전체를 콘솔에 출력
    console.log(req.url);
    var parsedUrl = url.parse(req.url);

    // parsing된 url중에 서버url에 해당하는 pathname만 따로 저장
    var resource = parsedUrl.pathname;
    console.log('resource path =%s',resource);

    if(resource == '/address'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('지구 대한민국 부산광역시');
    }else if(resource == '/phone'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('010-1234-5678');
    }else if(resource == '/name'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('전형탁');
    }else{
        res.writeHead(404, {'Content-type':'text/html'});
        res.end('404 Page Not Found');
    }
});

server.listen(8080, function(){
    console.log('Server is running...');
});