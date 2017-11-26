// 이벤트가 정의돼 있는 event모듈 생성
var EventEmitter = require('events');

// 생성된 이벤트 모듈 사용하기 위해 custom_object로 초기화
var custom_object = new EventEmitter();

// events 모듈에 선언되어 있는 on()함수를 재정의 하여 'call' 이벤트를 처리
custom_object.on('call', ()=> {
    console.log('called events!');
});

// call이벤트를 강제로 발생
custom_object.emit('call');