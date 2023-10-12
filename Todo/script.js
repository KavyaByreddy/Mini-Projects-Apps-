const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!input.value) return;
  addTodo(input.value);
  input.value = '';
});

function addTodo(text) {
  const todo = document.createElement('li');
  todo.classList.add('todo-item');
  todo.innerHTML = `
    ${text}
    <button class="delete-btn">Delete</button>
  `;
  todoList.appendChild(todo);
  todo.querySelector('.delete-btn').addEventListener('click', () => {
    todoList.removeChild(todo);
  });
  todo.addEventListener('click',() => {
    todo.classList.toggle('completed');
  });
}