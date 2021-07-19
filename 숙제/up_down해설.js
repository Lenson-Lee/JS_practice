//JS는 함수를 잘 만들어야한다.

//전역변수 선언 부분
//코드를 짤 때 맨 먼저 하는게 좋다.
//필요한 데이터:랜덤숫자로된 정답, 최소값, 최대값, 카운트다운횟수, 입력횟수
//많으니 객체로 다루자.

//초기 상수라 안바뀌게 설정. 객체에 넣음으로써 변동 가능하게 바꿈
const MIN = 1;
const MAX = 100; //이렇게하면 범위가 바뀌어도 변경 가능

const gameDatas = {
    secretNumber: Math.floor(Math.random() * (MAX - MIN + 1)) + MIN,
    min: MIN,
    max: MAX,
    countDown: 5,
    count: 0,
}



//함수 정의 부분


//사용자의 승패 여부를 확인해서 알림창으로 알려주는 함수
function checkCountDown(countDown) {
    if(countDown >= 0) {
        alert('YOU WIN');
    } else {
        alert('YOU LOSE');
    }
}

//사용자에게 남은 정답기회를 알려주는 함수
function alertCount(countDown) {
    if(countDown > 0){
    alert(`정답기회 ${countDown}번 남았습니다.`);
    } else {
        alert('정답 기회 모두 소진! 문제는 계속 풀어주세요!');
    }
}

//사용자의 입력값을 검증하는 함수 호출
//up, down 유무를 체크하는 함수
function checkAnswer() {

    //객체 디스트럭쳐링(ES6) . 배열디스트럭쳐링같은 개념?
    //const {키값} = 분해할 객체
    const {secretNumber,answer,count, countDown} = gameDatas;
    //if (gameDatas.secretNumber === gameDatas.answer) { 처럼 쓸 필요 없음

    if (secretNumber === answer) { //종료조건. break나 return?은 혼란스럽다?-> 불린값으로 구분
        //countdown안에 맞췄는지 여부를 판단하는 함수 호출
        checkCountDown(countDown);

        alert(`정답입니다! ${count}번만에 맞추셨군요!`);
        return true;
    } else if (secretNumber > answer) {
        alert('UP!');
        gameDatas.min = answer;
    } else {
        alert('DOWN!');
        gameDatas.max = answer;
    }
    alertCount(countDown);
    return false;
}

//사용자에게 정답을 입력받고 카운트, 카운트다운 처리를 수행하는 함수
function inputAnswer() {
    gameDatas.answer = +prompt(`숫자를 입력하세요! [${gameDatas.min} ~ ${gameDatas.max}]`);

    gameDatas.count++;
    gameDatas.countDown--;

    console.log(gameDatas);

    //사용자의 입력값을 검증하는 함수를 호출해야 한다.
    //진짜 종료조건이 필요한 while true한테 보내주기위해 return한다.
    const result = checkAnswer();
    return result;

}


//메인 실행 부분
//즉시실행함수로 메인 함수 만들기
(function () {

    //시작 메시지
    alert(`[UP & DOWN 게임 ${MIN} ~ ${MAX}사이의 숫자를 맞춰보세요!]`);


    //일련의 행동이 계속 반복
    while (true) {
        //사용자 입력 처리 함수 호출
        // const result = inputAnswer();
        // if (result) break;
        if (inputAnswer()) break;
    }

})();