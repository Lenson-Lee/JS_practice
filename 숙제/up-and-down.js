


//랜덤값 생성
const random = Math.floor(Math.random() * 100) + 1;

//정답 기회; 입력 총 카운트
// var i = 5; var c = 0;
// var c = 1;


//==================================
alert('[UP&DOWN 게임: 1부터 100 사이의 숫자 중 어떤 숫자가 들어있을까요?');
alert(`정답 :${random}`);


let count = 0;
while(true) {
    //입력한 숫자
    var num = +prompt('1부터 100 사이의 숫자를 입력하세요!');
    //입력값 바뀌는걸 막기 위해 변수 numcopy 사용
    // var numcopy = num; 
    if (count === 5) {
        alert('정답 횟수가 끝났어요! 하지만 계속 맞춰보세요!');
    }

    if (num === random) {
        alert(`정답입니다! ${count}회만에 맞추셨습니다!`);
        break;

    } else if (num > random) {
        i++;
        alert('DOWN!');
        alert(`정답 기회 ${6-count}회 남았습니다!`)
        +prompt(`0 부터 ${num} 사이의 숫자 중 입력해 주세요!정답 :${random}`);
        // continue;

    } else {
        i++;
        alert('UP!');
        alert(`정답 기회 ${6-i}회 남았습니다!`)
        +prompt(`${num} 부터 100 사이의 숫자 중 입력해 주세요!정답 :${random}`);
        // continue
    }
}

// //정답기회 끝나고
// for (i; i >= 6; i++) {

//     if (numcopy === random) {
//         alert(`정답입니다! ${i}회만에 맞추셨습니다!`);
//         break;

//     } else if (numcopy > random) {
//         i++
//         alert('DOWN!');
//         +prompt(`0 부터 ${numcopy} 사이의 숫자 중 입력해 주세요!정답 :${random}`);
//         // continue;
//     } else {
//         i++
//         alert('UP!');
//         +prompt(`${numcopy} 부터 100 사이의 숫자 중 입력해 주세요!정답 :${random}`);
//         // continue
//     }
// }