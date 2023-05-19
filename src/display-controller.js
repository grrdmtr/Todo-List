export default {
  setUpPage() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const header = document.createElement('header');
    
    const todoBtn = document.createElement('button');
    todoBtn.setAttribute('id','addTodo');
    todoBtn.innerHTML = 'Add todo';

    header.appendChild(todoBtn);
  
    const container = document.createElement('div');
    container.classList.add('container');

    const projects = document.createElement('div');
    projects.classList.add('projects');

    const todos = document.createElement('div');
    todos.classList.add('todos');

    const opacity = document.createElement('div');
    opacity.classList.add('opacity');

    document.body.appendChild(wrapper);
    wrapper.appendChild(header);
    wrapper.appendChild(container);
    container.appendChild(opacity);
    container.appendChild(projects);
    container.appendChild(todos);
    container.appendChild(this.todoForm());
    container.appendChild(this.editForm());


  },
  editForm() {
    const form = document.createElement('form');
    form.setAttribute('id', 'editForm');
    
    // Create an input element for Full Name
    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "editTitle");
    title.setAttribute("placeholder", "Title");

    const details = document.createElement("input");
    details.setAttribute("type", "text");
    details.setAttribute("name", "editdetails");
    details.setAttribute("placeholder", "Details");

    const dueDate = document.createElement("input");
    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("name", "editDate");
    dueDate.setAttribute("placeholder", "Due date");

    const project = document.createElement('input');
    project.setAttribute('list', 'editProject');
    project.setAttribute('placeholder', 'Choose project');

    const projectList = document.createElement('datalist');
    projectList.setAttribute('id', 'project');


    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('id','submitEdit');
    submit.innerHTML = 'Submit';

    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('id','closeBtn');
    closeBtn.innerHTML = 'X';

    form.appendChild(title);
    form.appendChild(details);
    form.appendChild(dueDate);
    form.appendChild(project);
    form.appendChild(projectList);
    form.appendChild(submit);
    form.appendChild(closeBtn);

    return form;
  },
  todoForm() {
    // Create a form dynamically
    const form = document.createElement('form');
    form.setAttribute('id', 'todoForm');
    
    // Create an input element for Full Name
    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title");

    const details = document.createElement("input");
    details.setAttribute("type", "text");
    details.setAttribute("name", "details");
    details.setAttribute("placeholder", "Details");

    const dueDate = document.createElement("input");
    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("name", "date");
    dueDate.setAttribute("placeholder", "Due date");

    const project = document.createElement('input');
    project.setAttribute('list', 'project');
    project.setAttribute('placeholder', 'New project or select existing one');

    const projectList = document.createElement('datalist');
    projectList.setAttribute('id', 'project');


    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('id','submit');
    submit.innerHTML = 'Submit';

    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('id','closeBtn');
    closeBtn.innerHTML = 'X';

    form.appendChild(title);
    form.appendChild(details);
    form.appendChild(dueDate);
    form.appendChild(project);
    form.appendChild(projectList);
    form.appendChild(submit);
    form.appendChild(closeBtn);

    return form;
  },
  allProjects(arr) {
    const projects = document.getElementsByClassName('projects')[0];
    const title = document.createElement('h3');
    title.innerHTML = '🚀 Projects:'
    projects.appendChild(title);

    const projectList = document.getElementById('project');
    if (arr.length > 0) {
      arr.forEach((project, index) => {
        if (!document.getElementsByClassName(`project-${index}`)[0]) {
          const option = document.createElement('option')
          option.setAttribute('value', `${project}`);

          projectList.appendChild(option);

          const projectCard = document.createElement('div');
          projectCard.classList.add(`project-${index}`);
          projects.appendChild(projectCard);

          const title = document.createElement('div');
          title.classList.add('projectTitle');
          title.innerHTML = `${index + 1}. ${project}`;
          projectCard.appendChild(title);
        }
      })
    }
  },
  allTodos(arr) {
    const todos = document.getElementsByClassName('todos')[0];
    const title = document.createElement('h3');
    title.innerHTML = 'Todo list:'
    todos.appendChild(title);

    if (arr.length > 0) {
      arr.forEach((todo, index) => {
        if (!document.getElementsByClassName(`todo-${index}`)[0]) {
          const todoCard = document.createElement('div');
          todoCard.classList.add(`todo-${index}`);
          todos.appendChild(todoCard);

          const edit = document.createElement('button');
          edit.setAttribute('id', 'edit');
          edit.setAttribute('value', `${index}`);
          edit.innerHTML = 'edit';
          todoCard.appendChild(edit);


          const title = document.createElement('div');
          title.classList.add('title');
          
          title.innerHTML = `${todo.title}`;

          const checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          checkbox.classList.add('default');
          checkbox.setAttribute('value', `${index}`);
          if (todo.completed) {
            checkbox.checked = true;
            title.classList.toggle('done')
          }
          todoCard.appendChild(checkbox);
          todoCard.appendChild(title);

          const content = document.createElement('div');
          content.classList.add('content');
          todoCard.appendChild(content);

          const details = document.createElement('div');
          details.classList.add('details');
          details.innerHTML = `Details: ${todo.details}`;
          content.appendChild(details);
          
          const dueDate = document.createElement('div');
          dueDate.classList.add('date');
          dueDate.innerHTML = `Due date: ${todo.date}`;
          content.appendChild(dueDate);

          const project = document.createElement('div');
          project.classList.add('project');
          project.innerHTML = `Project: ${todo.project}`;
          content.appendChild(project);

          edit.addEventListener('click', function() {
            const form = document.getElementById('editForm');
            form.style.display = 'grid';

            const title = document.querySelector('[name=editTitle]');
            title.setAttribute('value', `${todo.title}`);
            const details = document.querySelector('[name=editdetails]');
            details.setAttribute('value', `${todo.details}`);
            const date = document.querySelector('[name=editDate]');
            date.setAttribute('value', `${todo.date}`);
            const project = document.querySelector('[list=editProject]');
            project.setAttribute('value', `${todo.project}`);

            const opacity = document.getElementsByClassName('opacity')[0];
            opacity.style.display = 'block';

            const submitEdit = document.getElementById('submitEdit');
            submitEdit.setAttribute('value',`${index}`);
          })

          title.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === "grid") {
              content.style.display = "none";
            } else {
              content.style.display = "grid";
            }
          })

          checkbox.addEventListener('click', function() {
            const title = this.nextElementSibling;
            title.classList.toggle('done');
          })
        }
      })
    }
  },
  clear(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
  }
}