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




//0으로 세팅하는 변수는 반복문 안에 넣으면 반복해서 리셋되니 바깥에 두어야한다.
var correct = 0, inCorrect = 0;

while (true) {

    //항상 새로운 랜덤값을 받기 위해 while 안에 넣는다.
    var first = Math.floor(Math.random() * 101) + 1;
    var second = Math.floor(Math.random() * 101) + 1;

    //사용자가 입력한 답 mark는 랜덤사칙연산. 일단 변수 쓰고 후에 선언하는게 편하다.
    var answer = +prompt(`${first} ${mark} ${second}`);
    
    //0과 1이 랜덤으로 등장하게 한 후 0이면 +로, 1이면 \로 처리
    var rn = Math.floor(Math.random() * 2);
    var mark = rn === 0 ? '+' : '-';


    //종료조건
    if (answer === 0) break;
    
    //실제 답
    var realAnswer;

    if (mark === '+') {
        realAnswer = first + second;
    } else {
        realAnswer = first - second;
    }
    //항상 이렇게 확인해봐야한다. 콘솔에서 f12로.
    console.log(`real: ${realAnswer}`);
    console.log(`input: ${answer}`);

    //while문 안에 생성하면 코드 반복되면서 결국 0으로 다시 시작한다.
    // var correct = 0, inCorrect = 0;

    if (answer === realAnswer) {
        alert('정답');
        correct++;
    } else {
        alert('오답');
        inCorrect++;
    }
}//end While

//코드 길어지면 헷갈리니 이렇게 적는게 좋음

alert(`프로그램이 종료되었습니다. /n#정답 ${correct}개, 오답 ${inCorrect}개`);