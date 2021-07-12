//객체의 중첩 구조
//게시글 데이터(게시글 하나에는 제목 내용 일자 작성자 조회수 등 많은게 들어있다.. 그래서 객체를 쓴다.)
//json예시 검색해보면 도움 된다.


var articleList = { //타입은 객체 3개
    admin: 'admin123', 
    totalCount: 3670, //타입은 넘버 articleList.totalCount
    articles: [{
            bno: 3,
            title: '하하호호',
            writer: '둘리',
            view: 15
        },
        {
            bno: 2,
            title: '안녕안녕',
            writer: '도우너',
            view: 20
        },
        {
            bno: 1,
            title: '바이~',
            writer: '고길동',
            view: 30
        }
    ]
}

console.log(articleList.articles[0]);
console.log(articleList.articles[1].title); //안녕안녕
console.log(articleList.articles.length); //3