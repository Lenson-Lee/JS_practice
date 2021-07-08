

//2개의 정수의 합을 구하는 함수
function add2(n1, n2, n3) {
    return n1 + n2 + n3;
}

//n개의 정수의 합을 구하는 함수
function addAll(numbers) { //numbers는 []배열이다.
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    return total;
}
var result1 = addAll([10, 20, 5]);
console.log(`result1: ${result1}`);



//다른경우 호출자가아닌 정의부에서 
//스프레드 문법 (ES6+) 신규!
function addAll2(...numbers) { //numbers가 배열이 아니라는 점! '...'을 붙이면 몇 개를 정의하든 자동으로 매개변수 선에서 배열로 바뀜
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    return total;
}
var result2 = addAll2(10, 20, 30, 100); //배열이 아니다~!
console.log(`result2: ${result2}`);