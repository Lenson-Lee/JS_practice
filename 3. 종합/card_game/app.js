//=====================전역변수영역============================

//가로세로 설정
const horizon = 4;
const vertical = 3;

//카드감싸는 cards 요소 검색
const $cards = document.getElementById('cards');

//컬러리스트
let colorArray = [
    "pink",
    "pink",
    "skyblue",
    "skyblue",
    "yellow",
    "yellow",
    "coral",
    "coral",
    "gray",
    "gray",
    "yellowgreen",
    "yellowgreen"
]
//랜덤으로 들어갈 배열
let color = [];



//랜덤배열 만들기
const shuffle = () => {
    for (let i = 0; colorArray.length > 0; i++) {
        color = color.concat( //concat함수는 문자열을 합쳐준다.
            colorArray.splice(Math.floor(Math.random() * colorArray.length), 1)
        );
    }
}
shuffle();

//카드세팅
const setting = (horizon, vertical) => {
    for (let i = 0; i < horizon * vertical; i++) {

        //문서객체 생성
        const $card = document.createElement("div");
        const $cardInner = document.createElement("div");
        //카드 안쪽(답)
        const $cardBack = document.createElement("div");

        //문서객체에 클래스 부여
        $card.classList.add("card");
        $cardInner.classList.add("card-inner");
        $cardBack.classList.add("card-back");

        //문서객체를 추가하기
        $cards.appendChild($card);
        $card.appendChild($cardInner);
        $cardInner.appendChild($cardBack);

        $cardBack.style.backgroundColor = color[i];

        //toggle기능 부여
        $card.addEventListener("click", () => {
            $card.classList.toggle("flip");
        });
    }
}
setting(horizon, vertical);







//함수정의부

// console.log(color);

//메인실행부

// (function () {

// })