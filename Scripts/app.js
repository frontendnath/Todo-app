"Use Strict"

const addTodoButtonElement = document.getElementById('addTodoButton');
const todoNameElement = document.getElementById('todoName');

const todoData = [];

renderTodoItem();

function renderTodoItem() {

  let displayInHtml = '';

  for (let i = 0; i < todoData.length; i++) {

    const todoValue = todoData[i];
    const addedTodoToDOM = `

    <div class="bg-light mt-2 d-flex w-100 border p-3 align-items-center">
      <div class="me-auto">
        <b class="text-capitalize">
          ${todoValue}
        </b>
      </div>

      <div>
        <button onclick="todoData.splice(${i}, 1); renderTodoItem()" class="bg-transparent me-2 border-0 text-danger">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>

    `;
    displayInHtml += addedTodoToDOM;

  }

  const addedTodoContainerElement = document.getElementById('addedTodoContainer');

  if(todoData.length === 0) {

    addedTodoContainerElement.innerHTML = `
    
      <div class="d-flex text-muted text-center align-items-center justify-content-center" style="height: 150px;">

        <div>
          <h1 class="fw-bolder">0</h1>
          <h5>Todo added</h5>
        </div>

      </div>

    `;

  } else {

    addedTodoContainerElement.innerHTML = displayInHtml;

  }

}


addTodoButtonElement.addEventListener('click', () => {

  const todoNameValue = todoNameElement.value;

  todoData.push(todoNameValue);

  todoNameElement.value = '';

  renderTodoItem();

});