

/*
    # scores라는 이름을 가진 배열 변수가 있습니다.
      여기에는 학생들의 수학점수가 8개 저장됩니다.
      점수는 임의로 설정하세요.
    - 요구사항:
    1. 배열에 저장된 학생들의 수학점수의 총점과 평균을 구해서
       콘솔에 출력하세요.
    2. 학생들의 점수가 추가되었을 때 코드를 건드리지 않아도 자동으로
       총점, 평균이 갱신되어야 합니다.
*/

var scores = [98, 32, 66, 87, 49, 12, 100, 82];

//총점저장 변수, 전체순회해서 싸악 더해져야함...., 반복문순회 1부터 끝까지 하나씩 누적시킨 후 총점에서 데이터 수만큼 나누기


//총점
var total = 0;

for (var i = 0; i < scores.length; i++) {
    total += scores[i];
}
console.log(`총점: ${total}, 평균: ${total / scores.length}`);




