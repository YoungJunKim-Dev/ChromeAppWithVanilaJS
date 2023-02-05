const toDoList = document.querySelector("#todolist");
const todolistForm = document.querySelector("#todolistForm");
const textTemp = document.querySelector("#textTemp");
const addInput = document.querySelector("#addInput");
let todos = [];

const LOCALSTORAGE_GET_KEY = "todos";

const saveTodo = () => {
  const todotosave = JSON.stringify(todos);
  localStorage.setItem("todos", todotosave);
};
const paintTodo = (element) => {
  const newList = document.createElement("li");
  newList.id = element.id;
  newList.innerHTML = `<span >${element.text}</span>
    <input id="delete" type="image" src="./images/icons/trash.png" width="15px"/>`;

  toDoList.appendChild(newList);

  const deleteButton = newList.querySelector("#delete");

  deleteButton.addEventListener("click", deletebuttonClicked);

  todos.push(element);
};
const addTodolist = (e) => {
  e.preventDefault();
  const myObject = {
    id: String(Date.now()),
    text: addInput.value,
  };
  paintTodo(myObject);
  saveTodo();
  addInput.value = "";
};
const deletebuttonClicked = (e) => {
  const li = e.target.parentElement;
  todos = todos.filter((something) => String(something.id) !== li.id);
  li.remove();
  saveTodo();
};

todolistForm.addEventListener("submit", addTodolist);
const savedTodos = localStorage.getItem(LOCALSTORAGE_GET_KEY);
if (savedTodos) {
  parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach((element) => {
    paintTodo(element);
  });
}
