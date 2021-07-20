//복습하면서 업데이트 => 상 중 하 레벨 조정도 해보기


//전역변수영역

//게임에 필요한 데이터 개체
const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1,
    min: 1,
    max: 100
};

//함수 정의부
//기존 아이콘 전체삭제 함수
function clearAllIcons($numbers) {
    for (let $icon of [...$numbers.children]) {
        $numbers.removeChild($icon);
    }
}
//숫자 아이콘 생성 함수
function makeNumberIcons(isClear=false) {

    const $numbers = document.getElementById('numbers')

    //기존아이콘 전체삭제
    if (isClear) {
        clearAllIcons($numbers);
    }

    //DOM-6번 중간머시기
    //가상돔만들기. 버츄얼돔? 100개를 여기에 넣을거다
    const $frag =document.createDocumentFragment();

    //아이콘 i개 만들기
    for (let i = gameDatas.min; i <= gameDatas.max; i++) {
        const $icon = document.createElement('div');
        $icon.classList.add('icon');
        $icon.textContent = i;
        // $icon.textContent = 1~100까지 반복해야하는 부분.
        $frag.appendChild($icon);
        //css에서 row gap 주러감~
    }
    //100개 담긴 frag를 numbers에 한 번 담아서 느려지는거 방지
    $numbers.appendChild($frag);
}




//up & down인 경우 처리할 내용을 정의하는 함수
function processUpDownCase(isUp) {
    if (isUp) { 
        //up 인 경우
        gameDatas.min = gameDatas.answer + 1;
        document.getElementById('begin').textContent = gameDatas.min;
        
        //selected클래스 추가=> 하단에 더 깔끔하게 한번에 적었다.
        // const $up = document.querySelector('#up');
        // $up.classList.add('selected');
        
    } else {
        gameDatas.max = gameDatas.answer - 1;
        document.getElementById('end').textContent = gameDatas.max;
        
        //selected클래스 추가
        // const $down = document.querySelector('#down');
        // $down.classList.add('selected');
    }
    

    //updown아이콘 애니메이션 클래스 처리 함수 -> isUp 함수 다 있으니 이걸 쓰겠음
    function executeUpDownAnimation(isUp) {
        //부모컨텐츠받아오기? 구조분해할당 wow....이런방법이...ㄴㅇㄱ

        const ANI_CLASS_NAME = 'selected' //selected는 문자열이라 오타가나도 알려주지 않아서 변수에 넣기
                                            // 나중에 selected이름이 moving으로 바껴도 이거 하나만 바꾸면 끝!
        const [$up, $down] = [...document.querySelector('.result').children];
        if (isUp) {
            $down.classList.remove(ANI_CLASS_NAME);
            $up.classList.add(ANI_CLASS_NAME);
        } else {
            $down.classList.add(ANI_CLASS_NAME);
            $up.classList.remove(ANI_CLASS_NAME);

        }
    }
    executeUpDownAnimation(isUp);

    //아이콘 갱신 - 밑에 선택한만큼 또 생성되니까 기존의 숫자 지우는 방법으로 하겠다.
    makeNumberIcons(true);
}


// //down인 경우 처리할 내용을 정의하는 함수 -> up도 겹쳐서 둘을 합쳤따.
// function processDownCase() {
//     //최대값 갱신, - 1은 내가 선택한 숫자 지우기
//     gameDatas.max = gameDatas.answer - 1;
//     //html 숫자텍스트 #end에 최대값 넣기
//     document.getElementById('end').textContent = gameDatas.max;
//     //아이콘 갱신 - 밑에 선택한만큼 또 생성되니까 기존의 숫자 지우는 방법으로 하겠다.
//     //true면 지우고 다시 할당하라는 의미
//     makeNumberIcons(true);
// }


//정답을 맞췄을 때 처리함수
function processCorrect($target) {
    //축하박스 애니메이션 처리
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');


    //정답아이콘 확대효과
    //정답아이콘이 뭐인지 정할 줄 알면 다이해한거다....

    // const $numIcon = checkAnswer(true);
    // $numIcon.classList.add('#move');


    //=========중요=================
    //=========중요=================

    //160 부근의 if(!e.target.matches('#numbers .icon')) return;에서 e.target이 답이다.
    //함수마다 전달해서 여기까지 끌어당겨~
    //정보를 이 함수에서 알 수 없으면 역추적해서 필요한 곳까지 달라고 하자..........
    //혹은... <div>숫자</div>랑 정답숫자랑.? 반복문돌려서 비교해서 찾기..?
    $target.setAttribute('id', 'move');



}


//클릭된 숫자를 판별해 결과를 알려주는 함수
function checkAnswer($target) {

    //객체디스트럭쳐링
    const {secret, answer} = gameDatas;
    if(secret === answer) {
        //정답인 경우
        processCorrect($target);
        
    } else if (secret < answer) {
        //down인 경우
        processUpDownCase(false);

    } else {
        //up인 경우
        processUpDownCase(true);
    }
}

//메인 실행부
//즉시실행함수
// (function() {})();
(function () {

    //아이콘 배치 함수
    makeNumberIcons();

    //아이콘 클릭 이벤트
    const $numbers = document.getElementById('numbers');
    $numbers.addEventListener('click', e =>{
        
        //이벤트 핸들러 함수 다시 보고 오기.
        //e.target을 제한하는 방법( 흰 여백을 누르면 무한루프 버그가 발생하기 때문에 제한해야함.)
        if(!e.target.matches('#numbers .icon')) return;
        
        // console.log(e.target.textContent);
        //왜 e타겟 컨텐트에 넣었는지 다시 알기
        gameDatas.answer = +e.target.textContent;
        //콘솔로그보면 e와 시크릿 형태가 달라서 정수로 변환해줘야한다.
        // console.log(gameDatass);



        //정답체크 함수 호출
        // checkAnswer();
        checkAnswer(e.target);
    }) 
})();