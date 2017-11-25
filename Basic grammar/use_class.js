// NodeClass 선언
var NodeClass = require('./NodeClass');

// new 연산자를 사용해서 NodeClass 클래스를 nodeClass 변수로 초기화
var nodeClass = new NodeClass();

// setSpeed 함수로 값 입력
nodeClass.setSpeed(80);

//입력된 값 출력
console.log(nodeClass.getSpeed());
