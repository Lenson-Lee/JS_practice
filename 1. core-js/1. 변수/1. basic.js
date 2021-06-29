
// 어떤 수의 총합을 저장해서 사용하고 싶다.
// 변수의 선언(만든다)
var total;

total = 500;
// 변수의 초기화 (값 대입)

console.log(total);  
// 출력 명령


var result = 10 + 20;
console.log(result);

// 변수의 재할당 - 기존의 변수값은 사라지고 재할당한 값이 적용된다.
result = 60;
console.log(result);

// 변수의 값 복사
var copyResult = result;
result = 100;
console.log(copyResult);

total = total + 10;
console.log(total);
