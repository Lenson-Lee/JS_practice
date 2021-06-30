

//동등비교 --> (==, !=)는 결과 예측이 명시적으로 쉽지 않으므로 대신에 (===, !==) 사용하기!!!
//사용 자제 부탁. 자바스크립트는 타입이 다른 값도 내부 숫자가 같으면 알아서 변환시켜버린다.
console.log(5 == 5);
console.log(5 == '5'); //sting 5 도 같다고 나온다.. 


//일치비교 --> 값뿐만 아니라 타이볻 체크해서 같아야 true로 판단
console.log('==================================');
console.log(5 === 5); //true
console.log(5 === '5'); //false

console.log('==================================');
console.log('0' == ''); //false -->0은 true , ''은 없어서 false 
console.log(0 == ''); //true -->예측이 불가능해서 쓰는거 제발 멈춰~!
console.log(0 == '0'); //true
console.log(false == 'false'); //false
console.log(false == '0'); //true

//대소 비교
console.log('==================================');

var x = 10;
console.log(x > 5);
console.log(x >= 10);

//문자열 대소 비교
console.log('==================================');

console.log('apple' === 'APPLE'); //false 대소문자

    //ASCII CODE - A=65 B=66 C=67   a=97 b=98 c=99...
    //uni code 65536가지 2byte ...가 =44032 각-44033......힣...
     
console.log('ace' < 'ade'); //true   //문자 속 코드숫자가 더 큰게 이긴다. c=99 < d=100 -> true
console.log('복숭아' < '감자'); //false //복숭아가 더 숫자 크자나~!

/* 
    문자열 대소 비교는 같은 문자(영어 소문자, 영어 대문자, 한국어 등)
    사전에서 먼저 나오는 단어가 더 약하고 마지막에 나오는 단어일수록 더 크다.
    영어대문자 < 영어 소문자 < 한글
*/