// fs모듈 사용
var fs = require('fs');

// 비동기방식의 파일읽기
// 파일을 읽은 후 마지막 파라미터에 넘긴 callback함수가 호출
fs.readFile('C:\\Users\\전형탁\\Desktop\\learn_node_js\\test_module\\home.js','utf-8', function(error, data){
    console.log('01 readAsync: %s', data);
});

// 동기방식의 파일 읽기, 파일을 읽은 후 data변수에 저장
var data = fs.readFileSync('C:\\Users\\전형탁\\Desktop\\learn_node_js\\test_module\\home.js', 'utf-8');
console.log('02 readSync: %s', data);
console.log('==========================\n');