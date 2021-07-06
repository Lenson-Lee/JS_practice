

var foods = ['닭강정','볶음밥','피자'];
console.log(foods);

var lastElement = foods.pop(); //맨 뒤 삭제-> 백업할 기회를 준다. -> 변수설정시에 저장 가능
console.log(`제거된 요소: ${lastElement}`);
console.log(foods);


foods.push('파스타');//맨뒤추가
foods.push('족발'); //순서대로 들어간다.

console.log(foods);

var firstElement = foods.shift();//맨 앞 삭제 및 변수설정백업
console.log(`제거된 요소: ${firstElement}`);
console.log(foods);

foods.unshift('떡볶이');//맨앞추가
console.log(foods);