
//두 수의 덧셈 결과를 호출부로 전달하는 함수
function add (n1, n2) {
    console.log('Hello'); //6번 반복된다 
    return n1 + n2;
    console.log('Hello');// return 이후는 강제 종료여서 진행 안된다. 마치like break;
}

// function add (n1, n2) {
//     if (n < 0) {
//         return n1 + n2;
//     }
//     console.log('Hello');// 이런경우는 조건부라 작동할 수 도 있지만..
// }

//두 수의 곱셈의 결과를 콘솔창에 출력하는 함수 ????
function showMultiply(n1,n2) {
    console.log(`${n1} x ${n2} = ${n1 * n2}`);
}

//무한루프
function infLooping() {
    var n = 1;
    while (true) {
        console.log(n);
        if (n === 5) return; //함수 속이라 탈출문 break 대신 써도 된다.
        n++;
    }
}



//함수가 '반환할 수 있는 값은 단 하나'이다. (5,5) = 10 머 이런식으루
//그런데 2개의 정수를 전달받아 덧셈, 뺄셈, 곱셈, 나눗셈 값을 모두 리턴하고 싶다면? ->변수 하나로 여러개를 담은 배열 혹은 객체를 떠올려라
function operateAll(n1, n2) {
    return {//객체 혹은 배열 둘 다 가능
        plus: n1 + n2,
        minus: n1 - n2,
        multi: n1 * n2,
        divide: n1 / n2,
    };
    // return [
    //     n1 + n2,
    //     n1 - n2,
    //     n1 * n2,
    //     n1 / n2,
    // ]                -> var result \ operateAll[0] 머 이런식으로 출력하면 되겠지..
}



var result = add(10, 20); //밑에글 읽고,, 결국 result는 return하여 30이 저장된다.
add(10, 20);//이 코드가 30으로 바뀌는거다..? -> 변수에 담아서 사용해야한다.

console.log(add(5, 10)); //console.log(15)와 같다.
                                    

                                     //(20)
                  //(10, 10),       (20,20)
                  //(20, 40)                순으로 계산  
var result2 = add(add(10,10), add(add(15, 5), 20)); //가장 안쪽부터 call이 된다. (15, 5) ->(10,10), ((15,5=>20),20) *이경우에는 왼쪽부터 시작 
console.log(`result2: ${result2}`);

//var rn = Math.floor(Math.random()) 도 같은 개념으로 안쪽부터 시작


//리턴값이 없는 함수는 변수에 저장하거나 다른 함수의 인수로 전달하지 않고 단독호출해서 사용.
var result = showMultiply(5, 4);
console.log(`result = ${result}`);
// var result = showMultiply(5, 4);  함수에 return값이 없어서 consol.log해보면 알듯이 undefined 뜬다.
//add함수의 정의는 더해서 나온 결과값으로 추가적으로 무언가를 해야한다.
//mul함수는 곱한 결과만 보고싶은거라 굳이 retunr하는건 메모리 낭비다??????


infLooping();


var results = operateAll(20, 5); //객체를 리턴했으니 results에는 {객체}가 들어간다.
console.log(`덧셈결과: ${results.plus}`);
console.log(`곱셈결과: ${results.multi}`);








//================강사쌤코드================
//================강사쌤코드================
//================강사쌤코드================
//================강사쌤코드================




//두 수의 덧셈 결과를 호출부로 전달하는 함수
function add(n1, n2) {
    return n1 + n2;
    console.log('hello');
}

//두 수의 곱셈의 결과를 콘솔창에 출력하는 함수
function showMultiply(n1, n2) {
    console.log(`${n1} x ${n2} = ${n1 * n2}`);    
}

function infLooping() {
    var n = 1;
    while (true) {
        console.log(n);
        if (n === 5) return;
        n++;
    }
}

//함수가 반환할 수 있는 값은 단 하나입니다.
//그런데 2개의 정수를 전달받아 덧셈,뺄셈,곱셈,나눗셈 값을 모두 리턴하고 싶다.
function operateAll(n1, n2) {
    return {
        plus: n1 + n2,
        minus: n1 - n2,
        multi: n1 * n2,
        divide: n1 / n2
    };
}


var result = add(10, 20);

console.log(add(5, 10)); // console.log(15);

//            add(add(10, 10), add(20, 20));
//            add(20, 40);
var result2 = add(add(10, 10), add(add(15, 5), 20));
console.log(`result2: ${result2}`);

var rn = Math.floor(Math.random() * 10);

//리턴값이 없는 함수는 변수에 저장하거나 다른 함수의 인수로 
//전달하지 않고 단독호출해서 사용합니다.
var result = showMultiply(5, 4);
console.log(`result: ${result}`);

infLooping();

var results = operateAll(20, 5);
console.log(`덧셈결과: ${results.plus}`);
console.log(`곱셈결과: ${results.multi}`);