"Use Strict"

const addTodoButtonElement = document.getElementById('addTodoButton');
const todoNameElement = document.getElementById('todoName');

const addedTodo = [];

addTodoButtonElement.addEventListener('click', () => {

  const todoNameValue = todoNameElement.value;

  addedTodo.push(todoNameValue);

  console.log(addedTodo);

  addTodoButtonElement.value = '';

});