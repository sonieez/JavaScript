const todoList = [
  {
    name :'make dinner',
    dueDate: '2025-11-15'
  }, {
    name: 'wash dishes',
    dueDate: '2025-11-15'
  }];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name, dueDate}= todoObject;
    const html = `
      <div>${name}</div> 
      <div>${dueDate}</div> 
      <button class="delete-button" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
    `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name, 
    dueDate
  });

  inputElement.value = '';

  renderTodoList();

}

