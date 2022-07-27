var buttonElement = document.querySelector('#btnAdd');
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
var compTodo = JSON.parse(localStorage.getItem('completed_todos')) || [];

var listElement = document.querySelector('.content--ol');
var completedList = document.querySelector('.completed--ol');

function renderTodos() {
  listElement.innerHTML = '';
  for (var todo of todos) {
    var todoElement = document.createElement('li');

    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('span');

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
    var linkText = document.createTextNode('Done');

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

function renderCompTodos() {
  completedList.innerHTML = '';
  for (var todo of compTodo) {
    var compTodoElem = document.createElement('li');
    var compTodoText = document.createTextNode(todo);
    compTodoElem.appendChild(compTodoText);
    completedList.appendChild(compTodoElem);
  }
}
renderTodos();
renderCompTodos();

function addTodo(e) {
  e.preventDefault();
  inputElement = document.querySelector('#title');
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;
function deleteTodo(pos) {
  var x = todos.splice(pos, 1);
  //   console.log(x);
  renderTodos();
  compTodo.push(x);
  renderCompTodos();
  saveToStorageComp(x);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}
function saveToStorageComp(x) {
  localStorage.setItem('completed_todos', JSON.stringify(x));
}