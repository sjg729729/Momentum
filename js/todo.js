const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // console.dir(event.target);
  const li = event.target.parentNode;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}
function completeToDo(event) {
  const span = event.target.previousElementSibling;
  if (span.style.textDecoration === "line-through") {
    span.style.textDecoration = "none";
  } else {
    span.style.textDecoration = "line-through";
  }
}

//list 추가, button 추가, todo 삭제
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  li.appendChild(span);
  const button = document.createElement("button");
  const button2 = document.createElement("button");
  button.innerText = "❌";
  button2.innerText = "✅";
  button.addEventListener("click", deleteToDo);
  button2.addEventListener("click", completeToDo);
  li.appendChild(button2);
  li.appendChild(button);
  span.innerText = newTodo.text;
  toDoList.appendChild(li);
}

// submit 했을때
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // 입력 값
  toDoInput.value = ""; // input 초기화
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj); // todo 리스트 추가
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
const username = localStorage.getItem(USERNAME_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
