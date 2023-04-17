let todoList = [];

function addItemToList(item) {
  todoList.push(item);
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function getTodoListFromLocalStorage() {
  const storedTodoList = localStorage.getItem('todoList');
  if (storedTodoList) {
    todoList = JSON.parse(storedTodoList);
  }
}

getTodoListFromLocalStorage();

addItemToList('Buy groceries');

console.log(todoList);