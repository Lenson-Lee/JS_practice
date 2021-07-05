

//infitite-loop


//1~ 10 까지의 랜덤 정수를 반복해서 출력하는데
//만약 랜덤 정수가 6이 나오면 그만 할거다.

while (true) {
    var rn = Math.floor(Math.random() * 10) + 1;
    //if문이 없는 무한루프는 악성코드. 안꺼진다. -> alt f4 하거나 콘솔출력창에서 stop 해야한다.
    
    if (rn === 6) break;
    
    console.log(rn);
}