


//명시적으로 문자열 변환하는 법
var a = 10, b = 20;
var result = String(a) + String(b); //대문자 S ==> 가장 최신
var result = a.toString() + b.toString(); //대문자 S
var result = '' + a + b;
//var result = a + b + '' 은 안된다. a b가 먼저 숫자열이어서..

console.log(`resule: ${result}`);



//명시적 숫자 변환
console.log('===================================');


var m = '100', n = '5.11';

var result2 = Number(m) + Number(n);
var result2 = parseInt(m) + parseFloat(n); //Int 정수, Float 실수. 실수에 parseInt 적용하면 정수변환(소숫점사라짐)
var result2 = (+m) + (+n); //+붙이면 숫자변환이뤄짐. 보통 가독성 문제로 괄호 침
console.log(`result2: ${result2}`);



//명시적 논리 변환
console.log('====================================');

var ex1 = Boolean(undefined);
console.log(`ex1: ${ex1}`); //False

var ex2 = !!'메롱';
console.log(`ex2: ${ex2}`);//True

