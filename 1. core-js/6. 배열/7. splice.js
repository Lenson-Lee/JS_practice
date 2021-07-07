

//splice() : 배열 요소 삭제(pop, shift는 맨 뒤,앞 의 끝자리들이지만 이건 )

var foods = ['떡볶이', '오뎅', '김말이', '닭꼬치']


//1,2번을 제거가 아닌 1번 인덱스부터 총 2개를 삭제하라는 뜻이다.
//splice는 삭제된 요소를 다시 배열로 만들어 복사본을 리턴한다.

var delFoods = foods.splice(1,2);
console.log(foods);
// console.log(delFoods); //1,2에서 삭제된 애들을 뱉어낸다

//0번 인덱스부터 1개를 삭제하고 그 자리에 '치킨'을 삽입 하라는 뜻.
foods.splice(0, 1, '치킨');
console.log(foods);

//1번 인덱스부터 0개 삭제 하고 ''을 삽입해라. 
//=> push unshift와 같이 가운데에 배열 추가할 방법
foods.splice(1,0, '보쌈');

foods.push('파스타');
console.log(foods);

//2번인덱스부터 끝까지 삭제
foods.splice(2);
console.log(foods);

//특정요소를 탐색하여 삭제
console.log('==============================================');
foods.push('보쌈');
foods.push('닭발');
foods.push('파스타');

console.log(foods);

//사용자의 삭제 요구 데이터가 저장되어 있으면.
var requestData = '보쌈';
if (foods.includes(requestData)) {

// foods.splice(??,1); 보쌈이 몇 번에 있는지 배열을 볼 수 없으면? 찾아와야지.. indexOf 사용.
// foods.splice(foods.indexOf(requestData), 1);

var targetIdx = foods.indexOf(requestData);
foods.splice(targetIdx, 1);
console.log(`${requestData} : 삭제완료!`);
console.log(foods);

}else {
    console.log(`${requestData} : 존재하지 않는 음식입니다.`);
}