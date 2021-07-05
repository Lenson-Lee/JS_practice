


//구구단 2단을 출력해야 함
//3~9단까지 알아서 되면 좋겠음

// //단수를 저장할 변수
// var table = 2;

// for (var table = 2; table <= 9; table++) {
//     console.log('======================');
//     console.log(`# 구구단 ${table}단`);
//     console.log('======================');
    
//     for (var line=1; line <= 9; line++) {
//         console.log(`${table} x ${line} = ${table * line}`);
//     }
    
// }

//한국은 1234 이지만 외국은 0123..
//10까지 세어보라 하면 1부터 10까지 같지만 외국은 0부터 10(11개/ 우리난 이상, 이하 개념, 외국은 이상, 미만 개념으로 센다.)

console.log('==========================');
//중첩 너무 많이 중복되면 좋지 않음.
var count = 1;
for (var i = 0; i < 5; i++) {           //5
    for ( var j = 0; j < 3; j++) {    //3 -> 15개
        for (var k=0; k < 4; k++) {   //4   -> 60 개. 바깥쪽 한 번 당 안쪽 한바퀴
            console.log('hi~' + count++);
        }
    }
}