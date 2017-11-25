function Car(spd){
    this.color = 'Red';
    this.speed = spd;

    message = 'I am Car';
}

Car.prototype.getSpeed = function(){
    return this.speed;
}

Car.prototype.getMessage = function(){
    return this.message;
}

// 객체 생성
var car = new Car(50);

console.log(car.getSpeed());

// prototype으로 선언한 함수는 this 예약어가 사용되지 않은 변수값을 사용할 수 없다.
console.log(car.getMessage());
