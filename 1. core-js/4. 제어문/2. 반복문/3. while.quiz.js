

/*
- Quiz. 아래 요구사항에 맞는 코드를 작성하고 
        브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 사용자는 정수 2개를 각각 입력할 수 있어야 함.
2. 프로그램은 2번째 정수를 입력하고 엔터를 누르면 1번째 정수부터    
   2번째 정수까지의 총합(2번째 정수포함)을 출력해야 함.
3. 반복문 while을 사용할 것!
ex)  정수 3 , 7 을 입력했을 시 3 + 4 + 5 + 6 + 7 의 
     총합 25를 출력해야 함!
*/

// var start = +prompt('첫번째 정수를 입력하세요');
// var end = +prompt('두번째 정수를 입력하세요');

// var total = 0;

// while (start <= end) {
//     total += start;
//     start++;
// }


// alert(`${start}부터 ${end}까지의 총합은 ${total}입니다.`)



console.log('==============================================');

//해답
var start = +prompt('첫번째 정수를 입력하세요');
var end = +prompt('두번째 정수를 입력하세요');

var total = 0;
var n = start;
//start의 값이 바뀌는걸 방지하기 위해서...

while (n <= end) {
    total += n;
    n++;
}


alert(`${start}부터 ${end}까지의 총합은 ${total}입니다.`)

