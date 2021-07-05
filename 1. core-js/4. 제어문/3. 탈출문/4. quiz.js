/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 프로그램 실행 시 0~100사이의 무작위 두 수의 합을 
   물어보는 문제가 지속적으로 출제되게 하세요.
2. 올바른 답을 입력할 시 “정답입니다”를 
   틀린 답을 입력할 시 “오답입니다”를 출력하세요.
3. 사용자가 0을 입력하면 문제 출제를 중단하고 
   누적된 정답 횟수와 오답횟수를 출력하세요.
*/


//한 번 밤복할때마다 랜덤숫자 2개 만들기. 더하기만 해보고 할 만 하면 사칙연산 랜덤으로 하기
// 답입력 칸과 정답 비교하고 alert띄우고 정답오답 카운트 띄우고 0 하면 종료 및 카운트 출력


var i = Math.floor(Math.random() * 100) + 1
var j = Math.floor(Math.random() * 100) + 1
var countTrue = 0;
var countFalse = 0;
var answer = +prompt(`${i} + ${j}의 값을 구하세요`)

while (true) {
    if (answer === 0) {
        alert('프로그램이 종료되었습니다. \n 정답횟수 `${countTrue}`개, 오답횟수 `${countFalse}`개');
        break;
    }

    +prompt(`${i} + ${j}의 값을 구하세요`)
        if (answer === `${i+j}`) {
            countTrue++;
            console.log('정답입니다');
        } else {
            countFalse++;
            console.log('오답입니다');
        }
    
}


// if (answer === `${i+j}`) {
//     countTrue++;
//     console.log('정답입니다');
// } else if (answer !== 0) {
//     countFalse++;
//     console.log('오답입니다');
// } 