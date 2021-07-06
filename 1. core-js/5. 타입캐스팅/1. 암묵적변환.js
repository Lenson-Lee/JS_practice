


var ex = 10 + '20';
console.log(ex);
ex = 100 + '';
//+ 연산자는 문자열이 아닌 쪽을 문자열로 바꾼다.

var logical = true + '';
//true는 논리형인데 ''을 붙이면 string이 된다.
console.log(typeof logical);

var x = 100 - '30';
console.log(x);
//- 등 더하기가 아닌 연산자가 있으면 '' 속에 숫자가 있는 경우에 숫자열로 인식한다. 문자가 들어있다면 NaN이 뜬다.
