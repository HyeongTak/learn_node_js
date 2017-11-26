// exports객체를 사용해서 sum이라는 변수를 만들고, sum변수에 
// function을 사용해서 하나의 파라미터를 가진 함수식을 대입
exports.sum = function(max){
    // 입력된 값을 최대값으로 1부터 최대값까지 더해서 반환하는 로직
    return (max+1)*max/2;
}

// var1변수에 'NEW VALUE 100' 입력
exports.var1 = 'NEW VALUE 100';