

var point = 20;
console.log(`점수: ${point}`);

// if (point >= 60) {
//     console.log('시험에 합격했습니다.');
// }
// if (point < 60) {
//     console.log('시험에 불합격했습니다.');
// }

// 중괄호{} 생략 가능한 경우 : 명령문이 한 줄 일때. 두 줄 이상은 무조건 {필수.}
if (point >= 60) 
    console.log('시험에 합격했습니다.');

else {
    console.log('시험에 불합격했습니다.');
    console.log('수고하셨습니다.');
}