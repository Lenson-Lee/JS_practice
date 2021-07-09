/* 
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고 
  약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
3. 힌트) 전달받은 n을 1부터 n까지 지속적으로 나누어
   나누어 떨어졌을 시 약수의 개수 카운트를 1증가시키고 출력.
*/


function calcDivisor(targetNumber) {
  //배열을 선택해서 배열 안에서 약수들을 처리하는 방법으로 만들예정.
  //1부터 targetNum까지의 숫자중 약수를 구하는거.

  //약수들을 저장할 배열
  var divisors = [];
  for (var i = 1; i <= targetNumber; i++) {
    if (targetNumber % i === 0) {//약수조건 
      divisors.push(i)
    }  
  }
  console.log(`${targetNumber}의 약수: [${divisors}]`);
  return divisors.length; //배열의 갯수
}

var divCount = calcDivisor(24);
console.log(`약수의 개수: ${divCount}개`);


//약수 [1 2 3 4 6 8 12 24]가 출력이 아닌 갯수를 출력하는 거다....