const todoForm = document.forms.todo;
const todoContainer = document.getElementById('todo-containers');

todoForm.addEventListener("submit", (event) =>{
  event.preventDefault();
  const newTaskContainer = document.createElement('div');
  newTaskContainer.classList.add('todo-container');
 
  const newTask = document.createElement('input');
  newTask.type = 'text';
  newTask.classList.add('new-todo-input');
  newTask.disabled = true;
  newTask.value = document.getElementById('todo-input').value;
  document.getElementById('todo-input').value = '';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'DELETE';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener("click", (event) => {
    newTaskContainer.remove(newTask);
  })

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener("check", (event) => {
    newTaskContainer.classList.remove('todo-container');
    newTaskContainer.classList.add('done');
  })

  newTaskContainer.append(checkbox, newTask, deleteButton)
  todoContainer.append(newTaskContainer);

})


/*todoForm.addEventListener("submit", (event) => {
  event.preventDefault(); */