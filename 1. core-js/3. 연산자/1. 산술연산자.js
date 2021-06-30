
console.log(10/2);
console.log(5/2); //원래는 2.5가 아니라 2라고 나온다. 소숫점을 무시하기 떄문.5.0/2.0이라고 해야 2.5가 나온다. 자바스크립트는 소숫점 가능
console.log(27 % 5); //나머지값 나타냄
console.log(27 % 0); //0으로 나누는 것은 불가능
console.log(4 % 11); //0 나머지는 4 피제수(나누는대상)가 더 크면 제수가 나머지다.

console.log(0 % 99); //제수가 0이면 몫과 나머지 모두 0


// console.log(2 * 2 * 2 * 2);
console.log(2 ** 4); //2의 4제곱
//ES7 이전 이야기....


//단항 산술 연산자 ++, --
console.log('===========================');

var x = 3;
x++; //후위연산 : 선할당 후연산
++x; //전위연산: 선연산 후할당             ++이 두 번 되었으니 5가 된다.단독으로 쓾 떄는 앞뒤 중요하지 않음
x--; //다른 연산과 섞이면 복잡해져서 문제가 생겨 비추천.
console.log(`x: ${x}`);


//전위연산(prefix), 후위연산(postfix)
console.log("===========================");

var a = 10, result;

result = a++;
consolele.log(`1 - result: &{result}, a: &{a}`); //result 10 a 12 ->???result가 11이 아니네

//대입연산같이 다른 연산과 같이 섞이면 

result = ++a;
consolele.log(`2 - result: &{result}, a: &{a}`); //result 12, a 12


console.log("===========================");
/*
    아래 코드가 전부 실행 된 이후
    a, b, c, d에 할당된 값을 구하세요.
    (console.log로 확인하지 말 것!)
*/
var a = 1, b = 1;
var c = ++a; //a가 ++당해서 2로 바뀐 뒤 c로 간다
var d = b++; //b가 d로 간 뒤 ++당해서 뒤늦게 2가 된다.

//a: ? , b: ?, c: ?, d: ?
//추측 a 1 b1 c1 d2

console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);