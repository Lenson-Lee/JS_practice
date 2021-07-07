

//메서드 : 특정 타입에서만 쓸 수 있는 함수. 
//지금은 배열 함수만 배우는거니 배열에만 가능.



var foods = ['떡볶이', '오뎅', '김말이', '닭꼬치']

//indexOf() : 배열 요소의 인덱스를 알려줌
//탐색 실패 시 -1을 반환한다.
var idx = foods.indexOf('오뎅');
console.log(`찾은 인덱스: ${idx}`);

var idx2 = foods.indexOf('없는값');
console.log(`찾은 인덱스: ${idx2}`);

//includes() : 배열 요소의 존재 유무 확인
//true false
var result = foods.includes('없는거');
console.log(`탐색결과 : ${result}`);

var result2 = foods.includes('오뎅');
console.log(`탐색결과 : ${result2}`);


console.log('===================================');
//slice() : 배열을 잘라내어 복사함
var arr = [0,1,2,3,4,5,6,7,8,9];

var slicedArr = arr.slice(3,7);
//@이상 @미만 개념으로 7은 잘린다.
console.log(slicedArr);

//잘라서 복사한거라 원본 배열은 변하지 않는다.
console.log(arr);

//6부터 어디가 끝인지 모르지만 끝까지 추출하기
slicedArr = arr.slice(6);
console.log(slicedArr);


//reverse() : 배열을 역순으로 배치함, 단 원본이 변화한다.

console.log('====================================');

arr.reverse();
console.log(arr);
//원본을 변화시키지 않고 역순 정렬하려면 복사본을 이용.
var copyArr = arr.slice(0);
copyArr.reverse();


//join() : 배열의 요소들을 연결된 문자열로 반환
var foodStr = foods.join('!');
console.log(foodStr);


//concat() : 배열을 연결하여 복사배열을 리턴 (복사본)
var concatedArr = arr.concat([100, 200, 300]);
console.log(concatedArr);