var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req, res){
    var parsedUrl = url.parse(req.url);
    var resource = parsedUrl.pathname;

    // 요청된 자원이 /hello 이면
    if(resource == '/hello'){
        // hello.html 파일을 읽은 후
        fs.readFile('hello.html', 'utf-8', function(err, data){
            // 읽으면서 오류가 발생하면 오류의 내용을
            if(err){
                res.writeHead(500, {'Content-Type':'text/html'});
                res.end('500 Internal Server Error');
                console.log(err);
            }else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.end(data);
            }
        });
    }else{
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('404 Page Not Found');
    }
});

server.listen(8080, function(){
    console.log('server is running...');
});