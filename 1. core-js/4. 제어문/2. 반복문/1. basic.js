



// console.log('2번쨰 방문자 환영합니다');
// console.log('3번쨰 방문자 환영합니다');
// ......

var n = 1;


while (/* 논리값 */ n <= 10) {
    console.log(`${n}번쨰 방문자 환영합니다`);
    n++;
    //true 나오면 다시 while 로 올라가서 재검사 후 실행 무한반복. 
    //-> 11이 나와도 올라가서 재검사를 하고 false 후 블록 탈출.
}

console.log('반복문 종료: n ->' + n);
