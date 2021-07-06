

//?????어렵다?????

//OR 연산자 --> 둘 중 트루인쪽 먼저
console.log('Hello' || 'World'); //Hello
console.log('' || '안녕'); //''은 F

//AND연산자 -->
console.log('Hello' && 'World'); //
console.log('' && '안녕'); //''은 F


console.log('========================');

var x = 10;
// if(x > 0) {
//     console.log('x는 0보다 큽니다.');
// } 

x > 0 && console.log('x는 0보다 큽니다.'); //true && anything
                                          //if문과 같은 글이지만 압축해서 해석하는데 시간이 오래 걸려 좋지 않아보임