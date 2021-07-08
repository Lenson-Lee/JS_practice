/*
    Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
       반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/

function calcNumbersTotalAndAverage(...result) { //함수정의를 항상 제일 먼저
    var total = 0;
    var avg = result.length;
    for (var num of result) {
        total += num
    }
    return total;



}

var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함! -> 함수정의보다 밑에있어야함
console.log(`총합: ${result.total}, 평균: ${result.avg}`);