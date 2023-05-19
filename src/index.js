import './style.css';
import display from './display-controller';
import { todoFactory, getProjects, toggleCompleted } from './todos';

const todos = JSON.parse(localStorage.getItem('todos')) || [];
const projects = getProjects(todos) || [];

display.setUpPage();

const addTodoBtn = document.getElementById('addTodo');
addTodoBtn.onclick = () => {
  const form = document.getElementById('todoForm');
  form.style.display = 'grid';
  const opacity = document.getElementsByClassName('opacity')[0];
  opacity.style.display = 'block';
};

const closeBtn = document.querySelectorAll('#closeBtn');
closeBtn.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const form = document.getElementById('todoForm');
    form.style.display = 'none';
    const editForm = document.getElementById('editForm');
    editForm.style.display = 'none';
    const opacity = document.getElementsByClassName('opacity')[0];
    opacity.style.display = 'none';
  });
});

const todoContainer = document.getElementsByClassName('todos')[0];
const projectsContainer = document.getElementsByClassName('projects')[0];

const submitBtn = document.getElementById('submit');
submitBtn.onclick = (e) => {
  e.preventDefault();

  const title = document.querySelector('[name=title]').value;
  const details = document.querySelector('[name=details]').value;
  const date = document.querySelector('[name=date]').value;
  const project = document.querySelector('[list=project]').value;
  const todo = todoFactory(title, details, date, project);

  if (!projects.find((element) => element === project)) {
    projects.push(project);
  }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));

  display.clear(todoContainer);
  display.clear(projectsContainer);
  display.allTodos(todos);
  display.allProjects(getProjects(todos));

  const form = document.getElementById('todoForm');
  form.reset();
  form.style.display = 'none';
  const opacity = document.getElementsByClassName('opacity')[0];
  opacity.style.display = 'none';
};

const sumbitEditBtn = document.getElementById('submitEdit');

sumbitEditBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const title = document.querySelector('[name=editTitle]').value;
  const details = document.querySelector('[name=editdetails]').value;
  const date = document.querySelector('[name=editDate]').value;
  const project = document.querySelector('[list=editProject]').value;

  todos[this.value] = todoFactory(title, details, date, project);
  localStorage.setItem('todos', JSON.stringify(todos));

  const todo = todos[this.value];
  projects[this.value] = project;

  todo.title = title;
  todo.details = details;
  todo.date = date;
  todo.project = project;

  display.clear(todoContainer);
  display.clear(projectsContainer);
  display.allTodos(todos);
  display.allProjects(getProjects(todos));
  const form = document.getElementById('editForm');
  form.reset();
  form.style.display = 'none';
  const opacity = document.getElementsByClassName('opacity')[0];
  opacity.style.display = 'none';
});

const editBtn = document.getElementById('addTodo');
editBtn.onclick = () => {
  const form = document.getElementById('todoForm');
  form.style.display = 'grid';
  const opacity = document.getElementsByClassName('opacity')[0];
  opacity.style.display = 'block';
};

display.allTodos(todos);
display.allProjects(projects);

const checkboxes = document.querySelectorAll('input[type=checkbox]');

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('click', () => {
    toggleCompleted(todos, index);
    localStorage.setItem('todos', JSON.stringify(todos));
  });
});
