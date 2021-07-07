/*
- Quiz. 아래 요구사항에 맞는 코드를 작성하고 
        콘솔에서 실행하여 테스트하세요.
- 요구사항
1. 프로그램 실행 시 2~9단 중 무작위로 구구단이 등장하게 하세요.
2. for문과 while문으로 각각 구현하세요.
힌트) 먼저 2단을 구현해 본 뒤, 성공하면 랜덤 구구단으로 바꿔보기
- 출력 예시
====================
랜덤 구구단 4단
====================
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
*/

// x ~ y (이상 미만 개념)의 랜덤 정수 구하는 공식
// 공식) Math.floor(Math.random() * (y - x)) + x;

//출력할 문자
var printText = '';

printText += '====================\n';
printText += `랜덤 구구단 ${num}단\n`;
printText += '====================\n';
// alert('===================='); --> 한줄씩나와서 한 번에 나오게 하기 위해 변수에 넣음
// alert(`랜덤 구구단 ${m}단`);
// alert('====================');




console.log('while문');
var num = Math.floor(Math.random() * 8) + 2;
// var num = 2;//단 수
var i = 1; //곱하는 수

var printText = '';

printText += '====================\n';
printText += `랜덤 구구단 ${num}단\n`;
printText += '====================\n';

// while (i < 10) {
//         printText += `${num} x ${i} = ${num*i}\n`; 
//         i++;
// }
// alert(printText);


console.log('for문');

for (i = 1; i < 10; i++) {
        printText += `${num} x ${i} = ${num * i}\n`;
} alert(printText);