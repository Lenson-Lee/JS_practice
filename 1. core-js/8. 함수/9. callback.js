//중요한 부분. 공부 잘 하기


function showNumbers(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
// showNumbers(5);

//홀
function showOddNumbers(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 1){   
            console.log(i);
        }
    }
}
showOddNumbers(10);
//짝
function showEvenNumbers(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0){   
            console.log(i);
        }
    }
}
//if문의 조건을 상황에 맞게 바꿀 수 있게만 하면 함수 하나로 이 조건식들을 바꿀 수 있지 않을까?


//==============
//call back 함수
//==============

function showAllNumbers(n, condition) { //condition은 함수를 받아줄 매개변수 = call back함수
    for (var i = 1; i <= n; i++) {
        // if (??)여기들어갈 코드에 따라서 !
        if (condition(i)) { //코드를 넣을 조건변수 때문에 condition 넣었다
            console.log(i);
        }
    }
}

//콜백 함수는 함수 호출자(사용자)가 기본기능(n)은 만든사람에게 맡기고
//커스텀 기능을 스스로 생성해서 사용하고 싶을 때(함수?) 쓰는 기법이다.

// showAllNumbers(20, function(i) {
//     return i % 2 === 0;
// });                               -> 간단하게
showAllNumbers(20, i => i % 2 === 0);



console.log('=========================================');

//숫자배열을 전달하면 해당 배열을 조건부로 필터링하여 복사배열을 만들어주는 함수
//ex [1,2,3,4,5,6,7,8,9,10] 을 전달하면서 짝수조건을 걸면
//1  [2,4,6,8,10] dmf flxjs
//2  [] 속의 요소들을 제곱해서 출력? 아무튼 다양하게

function filter(array, filterCondition) {
    //필터링할 배열
    var filteredArray = [];
    for (var n of array) {
        if(filterCondition(n)){ //filterCondition에 n이 참이라면
            filteredArray.push(n);
        }
    }
    return filteredArray;
}


var numbers = [1,2,3,4,5,6,7,8,9,10];
filter (numbers, n => n % 3 === 0);         //함수를 적용한다는거는 내가 컨트롤한다는거..
// console.log(`results: ${results}`);
console.log(results);