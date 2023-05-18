import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import display from './display-controller.js';
import todoFactory from './todos.js';

const todos = [];

const projects = [];

display.setUpPage();

let addTodoBtn = document.getElementById('addTodo');
addTodoBtn.onclick = () => {
  const form = document.getElementById('todoForm');
  form.style.display = 'grid';
  const opacity = document.getElementsByClassName('opacity')[0];
  opacity.style.display = 'block';
}

let closeBtn = document.querySelectorAll('#closeBtn');
closeBtn.forEach((button) => {
  button.addEventListener('click', function(e) {
  e.preventDefault();

  const form = document.getElementById('todoForm');
  form.style.display = 'none';
  const editForm = document.getElementById('editForm');
  editForm.style.display = 'none';
  const opacity = document.getElementsByClassName('opacity')[0];
  opacity.style.display = 'none';
  })
});

const todoContainer = document.getElementsByClassName('todos')[0];
const projectsContainer = document.getElementsByClassName('projects')[0];

let submitBtn = document.getElementById('submit');
submitBtn.onclick = (e) => {
  e.preventDefault();

  let title = document.querySelector('[name=title]').value;
  let details = document.querySelector('[name=details]').value;
  let date = document.querySelector('[name=date]').value;
  let project = document.querySelector('[list=project]').value;
  let todo = todoFactory(title, details, date, project);

  if (!projects.find(element => element == project)) {
    projects.push(project);
  }
  
  const uniqProjects = [...new Set(projects)];
  todos.push(todo);
  display.clear(todoContainer);
  display.clear(projectsContainer);
  display.allTodos(todos);
  display.allProjects(uniqProjects);
  const form = document.getElementById('todoForm');
  form.reset();
  form.style.display = 'none';
  const opacity = document.getElementsByClassName('opacity')[0];
  opacity.style.display = 'none';
}

let sumbitEditBtn = document.getElementById('submitEdit');

sumbitEditBtn.addEventListener('click', function(e) {
  e.preventDefault();

  let title = document.querySelector('[name=editTitle]').value;
  let details = document.querySelector('[name=editdetails]').value;
  let date = document.querySelector('[name=editDate]').value;
  let project = document.querySelector('[list=editProject]').value;
  const todo = todos[this.value];
  projects[this.value] = project;
  todo.title = title;
  todo.details = details;
  todo.date = date;
  todo.project = project;

  const uniqProjects = [...new Set(projects)];

  display.clear(todoContainer);
  display.clear(projectsContainer);
  display.allTodos(todos);
  display.allProjects(uniqProjects);
  const form = document.getElementById('editForm');
  form.reset();
  form.style.display = 'none';
  const opacity = document.getElementsByClassName('opacity')[0];
  opacity.style.display = 'none';
})

let editBtn = document.getElementById('addTodo');
editBtn.onclick = () => {
  const form = document.getElementById('todoForm');
  form.style.display = 'grid';
  const opacity = document.getElementsByClassName('opacity')[0];
  opacity.style.display = 'block';
}
