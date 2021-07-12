// x~ y 까지의 누적합을 구하는 함수 정의

//1~10을 예시로
function calcRangeTotal() {
    var total = 0;
    for (var n = 1; n <= 10; n++) {
        total += n
    }
}

// ==> 
function calcRangeTotal(x, y) {
    // console.log(`x: ${x}, y: ${y}`); 
    var total = 0;
    for (var n = x; n <= y; n++) {
        total += n
    }
    return total;
}

//함수를 호출할 때 함수에 전달하는 값 1, 10을 '인수(argument)/인자,인자값' 라고한다.
var result1 = calcRangeTotal(1, 4);
console.log(`result1: ${result1}`);

calcRangeTotal(10); //에러는 안 난다.
var result2 = calcRangeTotal(10); //x값으로 들어간다.
console.log(`result2: ${result2}`); //y가 undefined --> false --> total 0이 유지되는 원리. 조심해야 한다.



//함수 정의
//ES6+ : 함수 매개변수의 기본값 설정 (하단의 language = 한국어)를 말한다. 값을 넣지 않았을때 기본으로 설정되는 값
function sayHello(language = '한국어') {

    //ES5문법 : 과거버전 문법
    language = language || '한국어'; //(language가 false 이고 '한국어'가 true여서 안녕이 실행된다... )



    if (language === '한국어') {
        console.log('안녕');
    } else if (language === '영어') {
        console.log('Hello');
    } else if (language === '중국어') {
        console.log('니하오');
    }
}

console.log('===============================');

sayHello('');



//매개변수가 없는 함수

function selectRandomFood () {
    var rn = Math.random();
    if (rn > 0.66) {
        return '짜장면';
    } else if (rn > 0.33) {
        return '볶음밥';
    } else {
        return '짬뽕';
    }
}

var food = selectRandomFood();
console.log(`선택된 음식: ${food}`);

//함수의 인수값의 타입이 잘못 전달되는 경우
function multiply(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {// 타입을 숫자로 체크를 해서 잘못된 연산을 방지
        console.log('인수를 숫자로 전달하세요');
        return; //함수를 강제 종료
    }
    return n1 * n2;
}
var result3 = multiply(5,8);
console.log(`result3: ${result3}`);