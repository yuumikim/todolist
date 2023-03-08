
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id != parseInt(li.id));
    saveToDos();
}
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.classList.add("todolist");
    const span = document.createElement("span");
    span.innerText = newTodo.text + " ";
    const button = document.createElement("button");
    button.innerText = " X";

    button.addEventListener("click", deleteToDo)

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener("click", deleteToDo); 
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit)
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const paredToDos = JSON.parse(savedToDos);
    toDos = paredToDos;
    paredToDos.forEach(paintToDo);
}