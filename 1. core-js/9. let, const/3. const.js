//let x; -> undefined     const x; -> SyntaxError (상수. 절대 바뀌지 않는 불변값이기때문에 넣어야한다.)

const pi = 3.14159265;
//pi = 6.666; // constant variable(상수) -> 값 변경이 불가해서 오류 뜸
console.log(`pi: ${pi}`);

let preTaxPrice = 100; //세전가격


//세후가격

//세율
const Tax_Rate = 0.1; //상수이름은 대문자로 지정해서 상수임을 관례적으로 알린다.

//예시
// let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1); -> 0.1보단 Tax_Rate가 가독성이 좋아서.
let afterTaxPrice = preTaxPrice + (preTaxPrice * Tax_Rate);


//const와 객체 (배열, 객체)
//배열, 객체는 const 쓰는 편이 좋다. 프로퍼티를 수정,추가 등 바꿀 순 있어서 이 편이 좋다.
const person = {
    name: 'park'
}
// person = {
//     name: 'lee'
// }

person.name = 'kim'
person.age = 20;


const arr = [1, 2, 3];
// arr = ['a','b','c'];

arr[1] = 20;


//===========================================

// var x = 10;
// function foo () {

// }
// foo()

// function bar() {

// }

// var y = 20;

// bar() //이렇게 하면 보기 불편하자나..

//밑에처럼 모아서 두는게 보통이다.
//전역변수
var x = 10;
var y = 20;

//함수
function foo() {

}

function bar() {

}

//즉시실행함수
(function () {
    //실제 실행코드
    foo()
    var z = 10;
    bar()

})

// //실제 실행코드
// foo()
// var z = 10; //작업하다 갑자기 넣어야 하는 변수가 생겨서 만들면 전역변수가 되니 즉시실행함수로 만든다.
// bar()