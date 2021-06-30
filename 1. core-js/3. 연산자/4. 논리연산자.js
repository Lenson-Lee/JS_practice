

/*
 && : AND
 || : OR (shift + 백슬래시\ 키)
*/

var t = true, f = false;
//AND 연산
console.log(t && t); //true
console.log(t && f); //false
console.log(f && t); //false
console.log(f && f); //false


console.log('==================================');

//OR 연산
console.log(t || t); //true
console.log(t || f); //true
console.log(f || t); //true
console.log(f || f); //false


console.log('==================================');

//놀이기구 제한 키 145이상 나이 8세 이상
var height = 150;
var age = 15;
console.log(`놀이기구 탑승 여부: ${height >= 145 && age >= 8}`); //true

var height = 140;
var age = 15;
console.log(`놀이기구 탑승 여부: ${height >= 145 && age >= 8}`); //false


//NOT 연산 (단항 연산자)
console.log("===================================");

console.log(!true); //true를 부정한다 -> false
console.log(!false); //false를 부정한다 -> true

//!를 쓰는 이유
//hasMoney() 함수 : 돈이 있으면 true 돈이 없으면 false를 반환
if (!hasMoney()) {} //hasMoney함수는 돈이 있을때 true니까 돈이 없을떄를 작동시키려면 !를 붙여야 한다.
