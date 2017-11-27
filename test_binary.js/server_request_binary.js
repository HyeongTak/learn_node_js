// npm install mime
var http = require('http');
var url = require('url');
var fs = require('fs');

// mime 모듈 추가. 서비스하려는 파일의 타입을 알아내기 위해서 필요
var mime = require('mime');

var server = http.createServer(function(req,res){

    var parsedUrl = url.parse(req.url);
    var resource = parsedUrl.pathname;

    // 요청한 자원의 주소가 '/img/' 문자열로 시작하면
    if(resource.indexOf('/img/') == 0){
        // 첫글자 '/'를 제외하고 경로를 imgPath변수에 저장
        var imgPath = resource.substring(1);
        console.log('imgPath = '+imgPath);

        // 서비스하려는 파일의 mime type
        var imgMime = mime.lookup(imgPath);
        console.log('mime='+imgMime);

        // 해당 파일을 읽어 오는데 두번째 인자인 인코딩(utf-8)값 없음
        fs.readFile(imgPath, function(err, data){
            if(err){
                res.writeHead(500, {'Content-Type':'text/html'});
                res.end('500 Internal Server');
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