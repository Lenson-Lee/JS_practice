/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

//사용자가 입력한 숫자들을 저장할 배열
// var numbers = [];
// var total = 0;
// while (true) {
//     var a = prompt('숫자를 입력해 주세요. 그만하고 싶으면 "그만" 이라고 입력해 주세요.');

//     if (numbers === +'') {
//         for (var i = 0; i < numbers.length; i++) {
//             total += numbers[i]
//         }

//     } else {
//         alert(`숫자의 총 합은 ${total}입니다.`);
//     }
// }



//해설

var numbers = [];


while (true) {
    //사용자 입력값  +prompt로 하면 '그만'에서 오류가 난다.
    var inputData = prompt(`숫자를 입력하세요. \n그만두려면 '그만 이라고 입력하세요.`);

    if(inputData === '그만') break;
    
    //배열에 입력데이터 삽입 -> 여기서 숫자로 바꾸어ㅑ 한다. +
    numbers.push(+inputData);

}

var total = 0;
for (var num of numbers) {
    total += num;
}
alert(`총합: ${total}`);



//카톡방 코드

/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

//사용자가 입력한 숫자들을 저장할 배열
var numbers = [];

while (true) {
    //사용자 입력값
    var inputData = prompt(`숫자를 입력하세요. \n그만두려면 '그만'이라고 입력하세요.`);

    if (inputData === '그만') break;
    
    //배열에 입력데이터 삽입
    numbers.push(+inputData);
}

var total = 0;
for (var num of numbers) {
    total += num;
}
alert(`입력한 숫자 총합: ${total}`);