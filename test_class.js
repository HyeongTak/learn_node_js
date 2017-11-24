// class(함수)의 선언
function Car(speed){
    // 변수를 객체의 맴버로 사용하기 위해 this 예약어 사용
    this.color = 'Red';
    this.speed = speed;

    // this 를 사용하지 않은 변수
    message = 'I am Car';
    // this를 사용하지 않은 변수에 접근하기 위한 멤버함수 선언
    this.print = function(){
        console.log(message);
    };
}

// 객체를 생성
var myClazz = new Clazz('good to see u!');
console.log(myClazz.message);
// this를 사용하지 않은 message2 변수는 외부에서 참조 불가
console.log(myClazz.message2);
// this로 선언된 함수를 통해 사용할 수 있다.
myClazz.print();