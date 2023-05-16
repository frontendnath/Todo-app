"Use Strict"

const addTodoButtonElement = document.getElementById('addTodoButton');
const todoNameElement = document.getElementById('todoName');
const todoDueDataElement = document.getElementById('dueData');

const todoData = [];

renderTodoItem();

function renderTodoItem() {

  let displayInHtml = '';

  for (let i = 0; i < todoData.length; i++) {

    const todoValue = todoData[i];

    const { taskName, dueData } = todoValue;

    const addedTodoToDOM = `

    <div class="todo_block">
      <div class="bg-light task_box mt-2 d-flex w-100 border p-3 align-items-center">
        <div class="me-auto">
          <div>
            <b class="text-capitalize">
              ${taskName}
            </b>
          </div>

          <div class="text-muted">
            ${dueData}
          </div>
        </div>

        <div>
          <button title="delete" onclick="

          swal({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this imaginary file!',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal('Poof! Todo item has been deleted!', {
                icon: 'success',
              });

              todoData.splice(${i}, 1); renderTodoItem()
            } else {
              swal('Todo app not deleted!');
            }
          });

          " class="bg-transparent border-0 text-danger">
            <i class="fas fa-trash"></i>
          </button>
        </div>
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
          <h5>Task added</h5>
        </div>

      </div>

    `;

  } else {

    addedTodoContainerElement.innerHTML = displayInHtml;

  }

}


addTodoButtonElement.addEventListener('click', () => {

  const todoNameValue = todoNameElement.value;
  const todoDateValue = todoDueDataElement.value;

  if(todoNameValue.length === 0 || todoDateValue.length === 0) {

    swal("Error!", "Task name or date cannot be empty!", "error");

  } else {

    swal("Success!", "Task has been added!", "success");

    todoData.push({

      taskName: todoNameValue,
      dueData: todoDateValue
  
    });

    todoNameElement.value = '';
    todoDueDataElement.value = '';

    renderTodoItem();

  }

});