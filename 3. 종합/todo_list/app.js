//1. 전역변수
//2. 함수 정의부
//3. 메인 실행부 순으로 만들거다

//============================

//1. 전역변수
//todos = [1(data-id태그 ). 2. 3번째 일정..]
//개발단계라 테스트용 내용으로 작업 
const todos = [
    {
        id: 1,
        text: '할 일 1',
        done: false
    },
    {
        id: 2,
        text: '할 일 2',
        done: false
    },
    {
        id: 3,
        text: '할 일 3',
        done: false
    }
];


//2. 함수 정의부

//추가될 새로운 할 일의 신규 아이디(data-id:1,2,3....)를 만들어서 리턴하는 함수
function makeNewId() {
    const lastObject = todos[todos.length-1];
    //console.log(lastObject.id); //?????=> 함수호출을 안해서 안 떴던 거였네^^;

    // return lastObject.id + 1;
    if(todos.length > 0){
    return todos[todos.length-1].id + 1; //데이터가 최소 1개 이상일 때만 가능 0개부터 시작일때 쓰면 터진다..
    } else { //기존데이터가 한개도 없는 경우
        return 1;
    }
}

//새 할 일을 화면에 렌더링하는 함수
function renderNewToDo(newToDo) { //undefine 에러 뜨는 이유: 밑에서 호출할 때 (newToDo)가 입력이 안되어있었다..데이터 연결이 끊긴 너낌?

    // console.log(newToDo);

    //태그 양이 넘 많아서 html에서 복붙했다. (근데 실수하기 딱 좋은 코드..) => ul에 넣기 innerHTML
    const newElement = `
    <li data-id="${newToDo.id}" class="todo-list-item">
    <label class="checkbox">
        <input type="checkbox">
        <span class="text">${newToDo.text}</span>
    </label>
    <div class="modify"><span class="lnr lnr-undo"></span></div>
    <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
    </li>
    `;
    const $toDoList = document.querySelector('.todo-list');
    $toDoList.innerHTML += newElement;
}

//할 일의 내용이 잘 입력되었는지 검사하는 함수
function validateInputText($targetInput){
    //input태그를 알고있어야한다. 호출부에서는 todotext를 갖다 줄 수 있다. todoText가 여기서 targetInput으로 들어옴.
    //**trim(): 문자열의 앞뒤 공백을 모두 제거
    //trim을 통해 스페이스만 누르고 입력하는게 통과하는 걸 막을 수 있다.

    if ($targetInput.value.trim() === '') {
        $targetInput.style.background = 'orangered';
        $targetInput.setAttribute('placeholder', '필수입력사항입니다!');
        $targetInput.value = ''//입력창 공백으로 바꾸기
        return false; //논리값으로 판단.

    } else { //원상복귀
        $targetInput.style.background = '';
        $targetInput.setAttribute('placeholder', '할 일을 입력하세요');
        return true;
    }
}

//할 일 추가 기능 처리 함수
function insertTodoData() {

    const $todoText = document.getElementById('todo-text');

    
    //0. 입력값 검증. 텍스트 입력을 안하고 클릭을 누르는 경우를 방지해야함 맨 밑에 함수에서 하면 input값이 없어서 여기로 따라옴
    
    // const flag = validateInputText($todoText);
    // if (flag === false) return;
    //줄여서
    if (!validateInputText($todoText)) return;


    //1. 데이터 처리: 필요한 데이터(todos객체)를 생성하여 todos배열에 추가
    
        //데이터생성
    const newToDo = {
        //id는 새로운 할 일이 추가 될 때마다 늘어난다. data-id: 1번 2번 3번++
        //방법은 많은데 두가지만 얘기하면 ul의 lastchild를 보고 dataid를 꺼내서 +1, **배열을 읽어서 키값을 꺼내오기 -> 함수생성
        id: makeNewId(),
        text: $todoText.value,
        done: false
    };


    // console.log(newToDo);
        //배열에 추가
    todos.push(newToDo);
    // console.log(newTodo);
    // console.log(todos);              //log확인은 바로바로해서 에러 바로잡아야한다.


    //2. 추가된 데이터를 화면에 렌더링
    renderNewToDo(newToDo); 


    //3. 입력 완료 후 input창 텍스트 지우기
    $todoText.value = '';
    


}


//3. 메인 실행부
(function() {

    //할 일 추가 이벤트

    //할 일 적기 -> 확인버튼 **클릭이벤트(enter)
    //$는 변수안에 태그가 들어있음을 알리는 관례적인 것. 없어도 문제는 안된다.

    const $addBtn = document.getElementById('add');
    console.log($addBtn);

    $addBtn.addEventListener('click', e => {
        e.preventDefault(); //submit 전송기능 중단
        //HTML에서 form에 버튼이 들어가면 타입이 자동으로 submit(서버로 전송/이동)이 들어가서 클릭이벤트 넣고 일정을 추가하면 새로고침 되는게 보인다.
        //=> 이벤트객체전파 - preventDefault 사용. 요소의 기본 동작을 중단. 
        
        // console.log('추가버튼 클릭');
        insertTodoData(); 
    })
})();