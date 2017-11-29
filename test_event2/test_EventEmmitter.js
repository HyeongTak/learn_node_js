var events = require('events');
var util = require('util');

// Radio객체 생성
Radio = function(){
    events.EventEmitter.call(this);
};

// Radio객체를 EventEmitter로부터 상속받음
// util모듈의 inherits메서드 사용
util.inherits(Radio, events.EventEmitter);

// 호출될 callback 함수 정의
var radioTurnOnListener = function(){
    util.debug('Radio turned on!!');
};

var radioChangeChannelListener = function(channel){
    util.debug('Channel has been changed to '+ channel);
};

var radioTurnOffListener = function(){
    util.debug('Radio turned off!!');
};

// radio 객체 생성
var radio = new Radio();

// 객체에 각각의 이벤트를 바인딩
// 이벤트에 관한 바인딩은 emitter객체.on('이벤트명', callback함수); 로 정의
radio.on('turnon', radioTurnOnListener);
radio.on('changechannel', radioChangeChannelListener);
radio.on('turnoff', radioTurnOffListener);

// 또는 바인딩 시에 직접 함수를 집어넣을 수 있다.
// radio.on('turnon', function(){
//     util.debug('Radio turned on!!');
// });

// 이벤트 실행
radio.emit('turnon');
radio.emit('changechannel');
radio.emit('turnoff');