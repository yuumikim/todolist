const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

const todos = [];

function savedToDo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function makelist(e) {
  e.preventDefault();
  const todo = todoInput.value;
  console.log(todo);
  todos.push(todo);
  paintToDo(todo);
  todoInput.value = "";
  savedToDo();
}
todoForm.addEventListener("submit", makelist);

const savedToDo = localStorage.getItem("todos");

if (savedToDo !== null) {
  const parsedToDos = JSON.parse(savedToDo);
  parsedToDos.forEach();
}
