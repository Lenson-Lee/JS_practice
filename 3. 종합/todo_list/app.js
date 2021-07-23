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
    const $li = document.createElement('li');
    $li.dataset.id = newToDo.id;
    $li.classList.add('todo-list-item');

    // console.log(newToDo);
    //태그 양이 넘 많아서 html에서 복붙했다. (근데 실수하기 딱 좋은 코드..) => ul에 넣기 innerHTML
    const newElement = `
    <label class="checkbox">
        <input type="checkbox">
        <span class="text">${newToDo.text}</span>
    </label>
    <div class="modify"><span class="lnr lnr-undo"></span></div>
    <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
    </li>
    `;

    $li.innerHTML = newElement;
    const $toDoList = document.querySelector('.todo-list');
    // $toDoList.innerHTML += newElement;
    $toDoList.appendChild($li);
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


//data-id값으로 배열을 탐색하여 아이디가 일치하는 객체의 인덱스를 반환
function findIndexByDataId(dataId) {
//for-of돌리면 몇 번째만에 돌렸는지 카운터를 세야함
for(let i = 0; i < todos.length; i++){
    //id가 아닌 id가 담긴 객체를 찾는중?
    if (todos[i].id === dataId) {
        return i; //n회차. 카운트역할
    }
    }
    //반복문이 끝날때까지 id를 못찾아서 return이 안되었을 때: 탐색 실패 증거로 null반환.
    return null;
}


//할 일 완료 처리 함수 정의
function changeCheckState($label) {
    /*
        1. 체크가 된 label 태그(css참조)에 checked클래스를 추가해야 한다.
        2. 이 함수에는 체크가 된 label태그의 정보가 필요함.
        3. 이 label태그는 이벤트 핸들러가 알고 있다.
    */
    // $label.classList.add('checked') => 한 번 더 누르면 사라져야함 : toggle
    $label.classList.toggle('checked');
    /*  4. 문제상황 : css만 변하고 실제 데이터(done)는 변하지 않음.(false라는 뜻)
        5. 만약 서버가 있었다면 서버에 완료상태를 반영해줘야 함.
        6. todos배열의 객체에 접근해서 done값을 변경해줘야 함. 
        7. 만약에 두번째 체크박스를 선택했다면 todos배열의 [1]인덱스'만'의 done값을 수정해야함.
            특정 객체의 값에 접근하기 위해서는 id를 이용해야한다?
            html보면 label태그 위 li태그를 보면 id가 있음 -> data-id속성 사용
        8. label태그의 정보를 알고 있다면 그 부모태그 li에 접근할 수 있고, 그 태그의 data-id속성을 조회하면
            객체의 id값을 얻을 수 있다.
    */
   console.log($label.parentNode.dataset.id); //data-id에서 data-(dash)는 빼고 적기?
   const dataId = +$label.parentNode.dataset.id; //data-id="1" 은 문자열 string이어서 + 붙임
    /*  9. id값을 기반으로 배열을 탐색하여 data-id와 일치하는 id프로퍼티를 가진 객체가 있는 인덱스를 찾아야함.
        각자 다른 id로 중복값이 있으면 안된다.
        */
    const idx = findIndexByDataId(dataId);
    console.log(`idx: ${idx}번`);

    //10. 찾은 인덱스로 해당 객체에 접근해서 done값을 수정
    // todos[idx].done = true;//체크해제하면 false로 바껴야 하는데.. (좌)영역 = (우)값 -> 우측의 값을 좌측의 영역으로 저장하라.
    if (idx !== null) {
        todos[idx].done = !todos[idx].done;
    }
    // todos[idx].done = !todos[idx].done;
    // console.log(todos);
}

//할 일 삭제 처리 함수
function removeToDoData($delTarget) {
    //1. 삭제 대상 li태그를 ul에서 제거해야 함.
    const $ul = document.querySelector('.todo-list');
    $ul.removeChild($delTarget);

    //2. todos배열에서 해당 객체 삭제
    //todos.splice(인덱스(id),1);
    const delIdx = findIndexByDataId(+$delTarget.dataset.id); //만든 함수 참고해서 쓰면 꿀
    todos.splice(delIdx, 1);
    // console.log();
}




//할 일 수정모드 진입 이벤트 처리 함수
function enterModifyMode($modSpan) {
    
    //버튼 모양을 교체 즉, 클래스 교체.
    $modSpan.classList.replace('lnr-undo','lnr-checkmark-circle');
    
    //텍스트 span을 input:text로 교체
    //const 부모노드 = (클릭한버튼 근처의 라벨을 가져와야해서 querrySelector 안된다.)
    const $label = $modSpan.parentNode.previousElementSibling
    // console.log($parentNode);
    const $textSpan = $label.lastElementChild;
    // console.log($spanNode);
    //부모노드.replaceChild(인풋노드, 스팬노드);

    //******이걸 내가 만들어야 했어~!!
    const $modInput = document.createElement('input');

    $modInput.setAttribute('type', 'text');

    //스팬에 있던 텍스트를 인풋 밸류에 넣는법?
    $modInput.setAttribute('value',$textSpan.textContent);

    //css 주기위한 단계.
    $modInput.classList.add('modify-input');

    $label.replaceChild($modInput, $textSpan);

}

//할 일 수정 완료 이벤트 처리 함수
function modifyToDoData($checkSpan) {

    //버튼 모양을 원래대로 되돌려야한다.
    $checkSpan.classList.replace('lnr-checkmark-circle', 'lnr-undo');
    console.log('수정버튼 돌아옴!');

    //input:text를 span.text로 교체
    const $label = $checkSpan.parentNode.previousElementSibling;
    const $modInput = $label.lastElementChild;

    //newSpan
    const $newSpan = document.createElement('span');
    $newSpan.classList.add('text');
    //실시간 변동값 가져오려면 .value 써야함
    // $newSpan.textContent = $modInput.getAttribute('value'); (X)
    $newSpan.textContent = $modInput.value;

    $label.replaceChild($newSpan, $modInput);

    console.log(todos);//확인해보면 실제 데이터텍스트값은 그대로다 -> 해당 배열에 접근해서 텍스트값을 변경해준다.
    //배열 데이터 수정
    const idx = findIndexByDataId(+$label.parentNode.dataset.id);
    todos[idx].text = $newSpan.textContent;


    // 인풋에서 텍스트를 변경할 때에도 체인지이벤트여서 체크박스에 버그가 생김
    //체인지 이벤트는 체크박스 체크할 때만 작동하도록 수정해야한다.
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


    //할 일 완료(체크박스) 이벤트
    //모든 체크박스를 감싸는 부모 리스트에 버블링. 근데 각각의 부모 label(x) 공통의 부모 ul(o)
    const $todoList = document.querySelector('.todo-list');
    $todoList.addEventListener('change', e => {
        console.log('체크박스 체인지 이벤트 발생');

        if(!e.target.matches('.checkbox input[type=checkbox')) return;

        //원형 아이콘들은 클릭이벤트라 변경 안되었다.
        
        //체크되었다면? -> span의 css가 변해야한다.
        //e.tatget 쓸 때 누군지 봐야한다. 체크박스에서 누르면 타겟 뜨는데 다른 여백 눌렀을때도 체크박스 뜨는지 봐야함
        //nextsibling 사용해서 span에 접근(css에서 먼저 설정해둔 값을 보면 label에 붙여야한다. 함수 생성으로 가보기)
        console.log(e.target.nextElementSibling);
        //체크박스에 변화가 생겼을때 css변동 처리 함수 호출

        // console.log(e.target.parentNode);
        changeCheckState(e.target.parentNode);
    })

    //할 일 삭제버튼 클릭 이벤트
    $todoList.addEventListener('click', e => {
        //console.log('삭제버튼 클릭됨!', e.target);
        //부모태그 버블링으로 수정태그도 함꼐 선택된다?
        //수정버튼은 .remove가 아닌 modify
        if (!e.target.matches('.remove span')) return;
        console.log('삭제버튼 클릭됨!', e.target);

        //console.log(e.target.parentNode.parentNode);
        removeToDoData(e.target.parentNode.parentNode);
    })

    //===============할 일 수정 클릭 이벤트 (수정모드 진입, 수정완료)
                                        // 두 개를 한 번에 하려면 matches사용시에 가능.
    $todoList.addEventListener('click', e => {
        //onclick은 지금상황에서 못 쓴다.
        //이벤트 발생 요소가 수정모드 진입버튼 이라면
        if (e.target.matches('.modify span.lnr-undo')) {
            // console.log(e.target);
            enterModifyMode(e.target);

        }
        //이벤트 발생 요소가 수정확인 버튼이라면
        else if (e.target.matches('.modify span.lnr-checkmark-circle')) {
            modifyToDoData(e.target);
            // console.log(e.target);
        } else {
            return;
        }
        // console.log('수정버튼 클릭됨!', e.target);
        
        

        // enterModifyMode(e.target); //아이콘에 접근
        
    })
    //수정이완료되면 객체의 배열의 수정property접근?
    //label 창으로 가서 input으로 바꿔조야해 input- createElement? class value같이....span을 교체.....
    //==============수정 클릭 시 텍스트창 수정 가능하게 되야한다..input?

})();