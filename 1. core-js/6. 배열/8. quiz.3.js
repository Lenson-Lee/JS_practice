/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. tvxq 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']
   을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤
   삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후
   다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 1명을 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/


//해설보고 다시하기 다 틀림


var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while (true) {
    var who = prompt(`현재 멤버 : [${tvxq}]\n 삭제할 멤버를 선택하세요`);

    // var idxWho = tvxq.indexOf(`${who}`);
    // tvxq.splice()

    if (tvxq.includes(who)) {
        var whoId = tvxq.indexOf(who);
        tvxq.splice(whoId, 1);
        confirm(`${who} : 삭제할까요?`);
        console.log(tvxq);
        break;
    } else {
        alert(`${who} : 는 잘못된 이름입니다.`);
    }
    alert(`삭제완료! \n 남은 멤버 [${tvxp}]`)
}