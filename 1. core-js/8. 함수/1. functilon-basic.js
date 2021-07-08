


//원의 넓이 : 파이 * r ** 2
//반지름이 5인 원의 넓이를 구해야 한다
var circle1 = 3.14159 * 5 ** 2;

//반지름이 10인 원의 넓이를 구해야 한다.
var circle2 = 3.14159 * 10 ** 2;

//반지름이 20인 원의 넓이를 구해야 한다.
var circle3 = 3.14159 * 20 ** 2;

//=======다른작업 엄청 많이 하고 나서========
//반지름이 100인 원의 넓이를 구하기에서 멘탈 나가서 실수 했다면? 혹은 원주율의 자릿수에 수정사항이 생겼다면 다 고쳐야 하는데..?
var circle4 = 31.4159 * 100 * 2;


//재활용성 측면과 수정,유지보수 측면에서 함수를 사용해야 하는 이유가 나온다.

///////////////////////////////////////////////

//1. 함수의 정의 function define (기본 형태 function + 식이름(변수명규칙 지켜서정하기) + 소괄호 + 중괄호오픈)
function calcAreaCircle(r) {
    //명령
    var areaCircle = 3.14159 * r ** 2;
    return areaCircle;
}

//2. 함수의 호출 function call (함수는 정의만 하면 사용할 수 없다. 실제로 식을 사용하려면 함수를 호출해야 한다.)

//반지름 5인 원의 넓이
var result1 = calcAreaCircle(5);
console.log(`result1: ${result1}`);

//반지름 10인 원의 넓이
var result2 = calcAreaCircle(10);
console.log(`result2: ${result2}`);