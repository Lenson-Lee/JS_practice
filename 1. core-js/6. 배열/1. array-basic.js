

//배열생성
var fruits = ['딸기', '포도', '복숭아', '사과'];

//배열의 길이
console.log(`배열 요소 수: ${fruits.length}`); //몇 개 저장됬는지 알려줌

//배열 요소 참조
console.log(`배열의 3번째 요소: ${fruits[2]}`);
var apple = fruits[3];//자주쓸거같으면 이렇게 써두 된다.
console.log(`apple: ${apple}`);

//배열 요소 수정
fruits[1] = '수박';
console.log(fruits);

//배열 요소 추가 --> 다른 언어에서하면 안되니까 조심해야한다. 4번에 다른데이터가 있으면 어떡하려고..
fruits[4] = '파인애플';
fruits[5] = '망고';
console.log(fruits);

//배열 요소 순회(전체 참조)
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);  언제 다 해

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}