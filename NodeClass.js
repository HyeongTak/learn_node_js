// Node에서 객체를 사용하는 방법

function Car(){
    this.color = 'blue';
    this.speed;
}

// speed 변수에 값을 입력하는 함수
Car.prototype.setSpeed = function(spd){
    this.speed = spd;
}

// speed 변수의 값을 가져오는 함수
Car.prototype.getSpeed = function(){
    return this.speed;
}

// exports 명령어를 사용함으로써 다른파일에서 require 예약어를 이용해 Car 객체를 사용할 수 있게된다.
// exports 명령어의 위치는 파일의 어떤곳에 위치해도 동일하게 동작한다.
module.exports = Car;