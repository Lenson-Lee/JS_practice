

var week = ['월','화','수','목','금','토','일'];

// for (var i = 0; i < week.length; i++) {
//     console.log(week[i] + '요일');
// } --> 보다 심플하게 쓸 수 있다.



//담아둘변수생성 of 배열
for (var day of week) {
    console.log(day + '요일');
}

//단점은 배열 중 특정 규칙 (ex 짝수번째 배열들만 선택하기) 가 어렵다. 
//전체순회할때는 forof가 좋고 조건부순회할 때는 for가 좋다.

//for문으로만 작성한다면 조건에 if(i % 2 === 0) {}을 넣으면 짝수선택만 가능하다.