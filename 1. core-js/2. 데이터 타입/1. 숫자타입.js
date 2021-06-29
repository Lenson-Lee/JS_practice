

var decimal = 200; //정수
var floatingPoint = 3.14; //실수

//typeof 연산자: 데이터타입을 문자열로 알려줌
console.log(typeof decimal); //실행해보면 number 뜬다
console.log(typeof floatingPoint);

var bin = 0b01000010;
console.log(bin); //2진법도 계산해주네... 2진수임을 알리려면 0b를 앞에 붙이고 해야한다.


var oct = 0o102; //8진수.. 0o 붙인다...
console.log(oct);

var hex = 0xAC00; //16진수 0x붙인다
console.log(hex);

console.log(10 / 4); //정수 / 정수 는 소수가 어케 나오노! 소수점을 버리고 정수 2가 나온다.
                     //근데 자바스크립트는 아직 인간같이 소수도 나옴

console.log(30 / '메롱'); // Not a Number -NaN 산술연산 불가값. 대소문자 꼭 이렇게만 써야한다.

