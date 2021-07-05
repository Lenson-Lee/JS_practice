

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
//     break; // i++ 하기전에 break 되어서 1 에서 끝
//     console.log('메롱');
// }
for (var i = 1; i <= 10; i++) {
    if (i > 5) {
        break; // 6이 들어가면서 break 되서 5까지만 표시된다.
    }
    console.log(i);   
}
console.log('반복문 종료!');

console.log('=================');

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        if (i === j) break;//제일 가까운 반복문만 종료된다. 
                           // 굳이 블록할 필요가 없어서 짧게 이렇게 쓴다.
                           //break하기전에 무언가를 해야한다면 {} 써야함.
                           
        console.log(`${i}, ${j}`);
    }
}