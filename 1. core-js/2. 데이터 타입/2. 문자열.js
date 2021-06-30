
var greeting;
greeting = 'hello';
console.log(typeof greeting);

var exStr = '그는 나에게 "위험해"라고 말했다';

exStr = "let's go!";

var exStr = '그는 나에게 \"위험해\"라고 말했다';
// \을 붙임으로써 특수기호임을 나타냄

var filePath = 'D:\temp\new.jpg';
var filePath = 'D:\\temp\\new.jpg';
// 파일경로 근데 \t가 아까 본 탈출문자, 개행태그와 같아서 인식이 잘못 된다. ->백슬래시를 두 번씩 써서 특수문자임을 나타낸다


// 템플릿 리터럴 (ES6+)
console.log("===========");


var template = '<ul>\n\t<li>\n\t</li></ul>;
// 빽팁 쓰면 줄 개행 가능. html처럼 작성 가능
var template = `<ul>
    <li>
        <a href=#>HOME</a>
    </li>
</ul>`;

console.log(template);
console.log("===========");

var month = 8;
var day = 15;
var anni = '광복절';

// console.log(month + '월' +day + '일은' +anni +'입니다' );
console.log('${month}월 ${day}일은 ${anni}입니다.');
// '" 로 하는게 아닌 백팁으로 입력해야 한다.


// x랑 y는 숫자지잠ㄴ ''이 붙ㅊ으면 string이 된다. '100' + '200' = 100 200으로 나오지 숫자 300 안나온다.
var x = 100;
var y = 200;
console.log(x + y);


