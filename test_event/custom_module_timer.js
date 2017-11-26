var EventEmitter = require('events');

// setInterval함수가 동작하는 interval값을 설정. 1초에 한번씩 호출
var sec = 1;

// timer변수를 EventEmitter로 초기화
exports.timer = new EventEmitter();

// javascript 내장함수인 setInterval을 사용해서 1초에 한번씩 timer 객체에 tick 이벤트 발생
setInterval(function(){
    exports.timer.emit('tick');
}, sec*1000);