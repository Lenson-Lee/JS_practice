

//break는 종료 continue는 건너뛰기(skip) 개념

for (var i = 1; i <=10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}
console.log('반복문 종료!');


while (true) {
    var n = +prompt('숫자를 입력하세요');
    if (n === 0){
        break;
    } else if (n === 1) {
        continue;
    }

    alert('안녕!')
}
alert('반복문 끝!')