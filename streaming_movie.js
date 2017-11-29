var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req,res){

    var parsedUrl = url.parse(req.url);
    var resource = parsedUrl.pathname;
    console.log('resource = '+resource);

    var resourcePath = '.'+resource;
    console.log('resourcePath = '+resourcePath);

    // html 페이지 요청이 들어왔을 경우는 텍스트 파일 처리
    if(resource.indexOf('/html/') == 0){
        fs.readFile(resourcePath, 'utf-8', function(err, data){
            if(err){
                res.writeHead(500, {'Content-Type':'text/html'});
                res.end('500 Internal Server');
                console.log(err)
            }else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.end(data);
            }
        });
    }else if(resource.indexOf('/movie/') == 0){
        // stream 생성
        var stream = fs.createReadStream(resourcePath);

        // 잘게 쪼개진 stream이 몇번 전송되는지 확인하기 위한 count
        var count = 0;

        // 잘게 쪼개진 data를 전송할 수 있으면 data이벤트 발생
        stream.on('data', function(data){
            count = count + 1;
            console.log('data count = '+count);

            // data이벤트가 발생되면 해당 data를 클라이언트로 전송
            res.write(data);
        });

        // 데이터 전송이 완료되면 end이벤트 발생
        stream.on('end', function(){
            console.log('end streaming');

            // 클라이언트에 전송완료를 알림
            res.end()
        });

        // 스트림도중 에러 발생시 error 이벤트 발생
        stream.on('error', function(err){
            console.log(err);

            // 클라이언트로 에러메세지를 전달하고 전송완료
            res.end('500 Internal Server');
            console.log(err);
        });
    }else{
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('404 Page Not Found');
    }

});

server.listen(8080, function(){
    console.log('server is running...');
});