//번외편


//즉시실행 함수
//함수 정의부와 실제 로직의 실행부를 나누기 위함
//다른 언어의 main함수처럼 사용
//일회용함수 (이름이 없어서 다시 못 부름)
//마치라잌 함수리터럴(이름없는함수)
// apple()처럼 이름이 있으면 괄호를 바로 칠텐데
//이름이 없는 함수여서 함수형태를 감싸고 콜의 의미가 담긴 괄호를 단다. 
// (function () {})()

(function (name) {
    console.log(`${name}님 안녕`);
})('홍길동');                       //함수를 만들면서 실행하는중. name이 call이 아닌걸 유의




//재귀 함수
//쓸모없는데 어려운거 -> 시험에 많이 나오는 특, 정처기에 자주출몰
//자기 자신을 계속 호출한다. 

function countdown(n) {
    // if (n < 0) return;
    // console.log(n);
    // countdown(n - 1); ->for문으로 변경가능
    for (var i = n; i >= 0; i--) {
        console.log(i);
    }
}
//재귀 함수 호출
countdown(5); //호출만 적어두면 무한루프 걸린다. 큰일. -> if문과 n-1로 한계(탈출)를 준다...




//중첩 함수
console.log('========================================');

function outer() {
    console.log('outer call');
    var x = 1;
   
    function inner() {
        console.log('inner call');
        var y = 2;
        console.log(x + y);
    }
    inner(); //중첩함수는 바깥쪽함수의 전용함수로서 바깥쪽 함수 내부에서만 호출이 가능. 밑에 예시가 있다.
}
outer();
// outer();//inner는 콜이 안된다? 
// outer();
// inner();//오류난다




//함수 리터럴, 화살표 함수(ES6+)

//함수 리터럴
var add = function(n1, n2) {
    return n1 + n2;
};
add(4,8);

//화살표 함수
var add = (n1, n2) => n1 + n2; // function 생략. 함수가 한 줄이면 {},return 빼도 된다. 두줄이상 불가.
console.log(add(100,200));

// var sayHello = function() {
//     console.log('안녕');
// };

// sayHello()                   를 화살표로 바꿔보겠음
var sayHello = () => console.log('안녕');
sayHello();

// var isEvenNumber = function(n) {
//     if (n % 2 === 0) {
//         return true;
//     } else { 
//         return false;
//     }
// };                           를 간단하게 바꿔보겠음

var isEvenNumber = function(n) {
    return n % 2 === 0;
};
var isEvenNumber = (n) => n % 2 === 0;
var result = isEvenNumber(60);
console.log(`result: ${result}`);

//============================
//문제
// 정수 n을 전달하면 n의 제곱값을 리턴하는 화살표 함수
// doubleMultiply를 작성하시오
//============================

var doubleMultiply = n => n ** 2; //매개변수 하나면 이것도 생략 가능.
console.log(`n = ${n}`);




//콜백 함수(중요. 동작이 있는 이벤트프로그램, 서버통신기록 프로그래밍할때 주로 쓰인다.)
