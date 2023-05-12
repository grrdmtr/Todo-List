import './style.css';
import display from './display-controller.js';
import todoFactory from './todos.js';

const todos = [];

display.setUpPage();

let addTodoBtn = document.getElementById('addTodo');
addTodoBtn.onclick = () => {
  todos.push(todoFactory());

  display.allTodos(todos);
}

let submitBtn = document.getElementById('submit');
submitBtn.onclick = (e) => {
  e.preventDefault();

  let title = document.querySelector('[name=title]').value;
  let description = document.querySelector('[name=description]').value;
  let date = document.querySelector('[name=date]').value;

  let todo = todoFactory(title, description, date);

  todos.push(todo);
  display.allTodos(todos);
}
