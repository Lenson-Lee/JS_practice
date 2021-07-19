//전역변수영역

//게임에 필요한 데이터 개체
const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1,
    min: 1,
    max: 100
};

//함수 정의부
//숫자 아이콘 생성 함수
function makeNumberIcons() {

    const $numbers = document.getElementById('numbers')
    //DOM-6번 중간머시기
    //가상돔만들기. 버츄얼돔? 100개를 여기에 넣을거다
    const $frag =document.createDocumentFragment();

    //아이콘 i개 만들기
    for (let i = 1; i <= 100; i++) {
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


//메인 실행부
//즉시실행함수
// (function() {})();
(function () {

    //아이콘 배치 함수
    makeNumberIcons();

})();