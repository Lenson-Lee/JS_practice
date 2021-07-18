const random = Math.floor(Math.random() * 100) + 1;
alert(`정답: ${random}`);

alert('[UP&DOWN 게임: 1부터 100 사이의 숫자 중 어떤 숫자가 들어있을까요?');
var num = +prompt('숫자를 입력하세요!');

var i = 5; //정답기회 횟수
var c = 0; //입력 카운트



while (num > 0 && num < 101) {

    i--; //왜 밑에서는 실행이 안되지.?
    c++;

    if (i === 0) {
        alert('정답횟수 초과! 끝까지 맞춰보세요!');
        continue;
    }

    if (num === random) {
        alert(`정답입니다! ${c}회만에 맞추셨습니다!`);
        break;

    } else if (num > random) {
        alert('DOWN!');
        alert(`정답 기회 ${i}회 남았습니다!`) +
            prompt(`0 부터 ${num} 사이의 숫자 중 입력해 주세요!`);
        continue;
    } else {
        alert('UP!');
        alert(`정답 기회 ${i}회 남았습니다!`) +
        prompt(`${num} 부터 100 사이의 숫자 중 입력해 주세요!`);
        continue
    }

}

if (num < 0 || num > 100) {
    +prompt('다시 입력해 주세요! 1부터 100 사이의 숫자만 입력해 주세요!');
    continue;
}






// //조건을 이탈할 때
// if (num < 1 || num > 100) {
//     +prompt('1부터 100 사이의 숫자만 입력해 주세요!');
// }


// //틀렸을 때
// if (num > random) {
//     alert('DOWN!');
//     +prompt(`정답 기회 ${i}회 남았습니다!`);
// } else {
//     alert('UP!');
//     +prompt(`정답 기회 ${i}회 남았습니다!`);
// } 
// i--
// c++