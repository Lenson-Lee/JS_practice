

console.log('===========');
var x;
var y;

for (x = 1; x <= 10; x++) {
    for (y = 1; y <= 10; y++) {
        //if는 x와 y가 정해진 y 안에 넣어야 한다.
        //=== 쓰라고~~
        if (4*x + 5*y === 60) {
            console.log(`(${x},` `${y})`);
        }
    }
}