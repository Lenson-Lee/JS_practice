

var height = +prompt('당신의 키는?');

if (height >= 140) {
    var age = +prompt('당신의 나이는?');
    if (age >= 8) {
        alert('놀이기구에 탈 수 있어요')
    } else {
        alert('나이가 모자라서 놀이기구에 탈 수 없어요~')
    }
} else {
    alert('키가 작아서 놀이기구에 탈 수 없어요~')
}

// Bracket Pair Colorizer -> 괄호 한번에 수정하는 툴 꼭 쓰기