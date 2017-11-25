var http = require('http');

//요청한 url을 객체로 만들기 위해 url모듈 사용 
var url = require('url');

//요청한 url중에 Query String을 객체로 만들기 위해 querystring모듈 사용
var querystring = require('querystring');

var server = http.createServer(function(req, res){
    console.log('---log start---');
    var parsedUrl = url.parse(req.url);
    console.log(parsedUrl);

    // 객체화된 url중에 Query String부분만 따로 객체화 후 출력
    var parsedQuery = querystring.parse(parsedUrl.query,'&','=');
    console.log(parsedQuery);
    console.log('---log end---');

    res.writeHead(200, {'Content-type':'text/html'});
    res.end('Hello node.js!!');
});

server.listen(8080, function(){
    console.log('server is running...');
})