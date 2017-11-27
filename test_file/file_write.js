var fs = require('fs');

// 새로 생성할 파일에 입력될 문자열
var data = "My first data...\r\nhello there!";

//비동기 방식으로 파일을 생성
// 함수의 인자는 앞에서부터 순서대로 파일명, 입력데이터, 인코딩, 콜백함수
fs.writeFile('file01_async.txt', data, 'utf-8', function(err){
    if(err){
        // 파일생성 중 오류가 발생하면 오류출력
        console.log(err);
    }else{
        // 파일생성 중 오류가 없으면 완료 문자열 출력
        console.log('01 WRITE DONE!');
    }
});

// 동기방식은 callback함수를 통한 오류처리를 할 수 없기 떄문에 함수 전체를 try문으로 예외처리
try{
    // 동기 방식으로 파일을 생성. 
    // 함수의 인자는 앞에서부터 순서대로 파일명, 입력데이터, 인코딩
    fs.writeFileSync('file02_sync.txt', data, 'utf-8');
    console.log('02 WRITE DONE!');
}catch(err){
    console.log(err);
}