//난수



//랜덤값 생성하기
//함수 Math.random() -> 0.0이상 1.0미만의 랜덤 실수값을 생성한다

                // 함수든 뭐든 값을 사용하려면 변수를 만들어야함
var randomNumber = Math.random();
console.log(`랜덤값: ${randomNumber}`);

if (randomNumber > 0.66) {
    console.log('짜장면');
} else if (randomNumber > 0.33) {
    console.log('칼국수');
} else {
    console.log('보쌈');
}

// Math.floor() : 내림값, Math.ceil() : 올림값, Math.round() : 반올림값

console.log(Math.floor(3.3)); //소숫점 3을 내림한다고? 3
console.log(Math.ceil(3.3)); //소숫점 3을 올림한다고? 4
console.log(Math.round(3.3)); //소숫점 3을 반올림    3


//0~10사이의 랜덤 정수

Math.random() //0.0~ 1.0미만
Math.random() * 11; // 0.0~11.0 미만

var rn = Math.floor(Math.random() * 11);//0.0-11미만. fllor해서 11.0이 아니라 11???
console.log(`랜덤정수: ${rn}`);