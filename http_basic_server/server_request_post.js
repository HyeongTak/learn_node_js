var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(req, res){
    // post로 전달될 데이터를 담을 변수를 선언
    var postdata = '';

    // request객체에 on()함수로 'data'이벤트를 연결
    req.on('data', function(data){
        // data이벤트가 발생할 때마다 callback을 통해 postdata변수에 값을 저장
        postdata = postdata+data;
    });

    // request객체에 on()함수로 'end'이벤트를 연결
    req.on('end', function(){
        // end이벤트가 발생하면(end는 한번만 발생) postdata를 querystring으로 객체화
        var parsedQuery = querystring.parse(postdata);

        // 객체화된 데이터를 로그로 출력
        console.log(parsedQuery);

        //성공 header와 데이터를 담아서 클라이언트에 응답처리
        res.writeHead(200, {'Content-Type':'text/html'});

        // http://localhost:8080/?var1=newdata&var2=123&var3=data789
        // 로 접속해보면 var1 : undefined로 전송하는 것을 확인할 수 있다.
        // postman으로 데이터를 보내면 정상적으로 반환한다.
        res.end('var1 : '+ parsedQuery.var1);
    });
});

server.listen(8080, function(){
    console.log('server is running...');
});