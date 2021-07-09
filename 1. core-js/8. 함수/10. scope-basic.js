


function foo(x) {
    var y = 10;
    console.log(x);
    console.log(y);
}

console.log('========================================');
//console.log(x); //function 안에 있는데 어케 밖에서 부르노 => return 해야한다.
//console.log(y); //function 안에 있는데 어케 밖에서 부르노

//스코프는 함수 속에서는 유효한데 함수가 끝나면 정보가 날아가서 함수 바깥에서 안되는거다.

foo(5); //foo의 호출에서만 작동한다.


console.log('========================================');

var z = 'global';

function bar() {
    var z = 'local';
    console.log(`함수내부: ${z}`);
}

bar();
console.log(`함수외부: ${z}`); //분명 함수 속에서는 local로 바꿨는데?
                              // -> 변수에 메모리가 두 개가 들어있어서 가능
                              // -> #전역변수                       | #지역변수
                              // -> 함수밖에서 선언된 함수          | 함수 안에서 선언된 함수
                              // -> 함수가 끝나면 지역변수사라짐    | 만약 지역변수가 없다면 전역변수를 사용. 지역변수가 우선순위다.
                              // -> z = global                     | z = local
