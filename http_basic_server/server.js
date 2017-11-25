// http모듈을 변수에 담음
var http = require('http');

// http모듈로 서버 생성
var server = http.createServer(function(req,res){
    // 사용자로부터 http요청이 들어오면 function 블럭 내부의 코드를 실행
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('Hello node.js!!');
});

// listen 함수로 8080포트를 가진 서버 실행
server.listen(8080, function(){
    console.log('Server is running...');
});