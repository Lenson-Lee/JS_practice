// 식별자 : 데이터를 구분하기 위한 고유의 이름 (변수이름, 함수이름...)

// 1. 대소문자를 구분할 것
var banana = '바나나';
var BANANA = '빠나나';
var Banana = '빠네이너';

// 2. 숫자로 시작하면 안된다.
// var 7 = 99; (x)
// var 99haha = 100; (X)
var number3 = 3; 
var haha33haha = 100;
// 맨 앞만 아니면 들어가도 좋다.

// 3. 특수문자는 _, $ 외 사용 금지
// var my-name = 'hong'; (X)
// var hello! = 'hi'; -!도 안된다. (X)

// 4. 띄어쓰기 불가능
//var user phone number = '010-1234-1234'
var userphonenumber = 11;

// 관례 convention 변수명이 길면 가독성을 올리는법
var user_phone_number = 1; //snake case 뱀같이 생겨서 :파이썬,SQL 추천
var userPhoneNumber = 1; //camel case 낙타같이 생겨서 :자바스크립트 추천
var UserPhoneNumber = 1; //pascal case : 클래스이름

//Hungarian case : 변수명 앞에 데이터의 모양을 표기 거의 폐기된 표기법.
var strName = '홍길동';
var numPoint = 87;

//변수명 지을 때 구체적이고 명확하며 일관되게 지어야 한다.
//예) 회원정보 저장 var userName, var userPassword 등.. 밑에처럼 짓지 말기
var a = '홍길동';
var z = 'id_adfadfadf!#!#';
var xu = 'adfaf';

//5. 키워드는 식별자 이름으로 사용 불가능