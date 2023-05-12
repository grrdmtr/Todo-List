export default {
  setUpPage() {
    const header = document.createElement('header');
    
    const todoBtn = document.createElement('button');
    todoBtn.setAttribute('id','addTodo');
    todoBtn.innerHTML = 'Add todo';

    header.appendChild(todoBtn);
  
    const container = document.createElement('div');
    container.classList.add('container');

    const todos = document.createElement('div');
    todos.classList.add('todos');

    document.body.appendChild(header);
    document.body.appendChild(container);
    container.appendChild(todos);
    container.appendChild(this.setUpForm());

  },
  setUpForm() {
    // Create a form dynamically
    const form = document.createElement('form');
    
    // Create an input element for Full Name
    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "title");

    const description = document.createElement("input");
    description.setAttribute("type", "text");
    description.setAttribute("name", "description");
    description.setAttribute("placeholder", "description");

    const dueDate = document.createElement("input");
    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("name", "date");
    dueDate.setAttribute("placeholder", "Due date");

    const priority = document.createElement("input");
    priority.setAttribute('id', 'priority');
    priority.setAttribute("type", "radio");
    priority.setAttribute("name", "priority");
    priority.setAttribute("placeholder", "priority");

    const lowPriority = document.createElement('label');
    lowPriority.innerHTML = 'Low';
    lowPriority.setAttribute('for', 'priority')
    priority.appendChild(lowPriority);

    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('id','submit');
    submit.innerHTML = 'Submit';

    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(submit);

    return form;
  },
  allTodos(arr) {
    const todos = document.getElementsByClassName('todos')[0];

    if (arr.length > 0) {
      arr.forEach((todo, index) => {
        if (!document.getElementsByClassName(`title-${index}`)[0]) {
          const todoCard = document.createElement('div');
          todoCard.classList.add(`todo-${index}`);
          todos.appendChild(todoCard);

          const title = document.createElement('div');
          title.classList.add('title');
          title.innerHTML = todo.title;
          todoCard.appendChild(title);

          const description = document.createElement('div');
          description.classList.add('description');
          description.innerHTML = todo.description;
          todoCard.appendChild(description);
          
          const dueDate = document.createElement('div');
          dueDate.classList.add('date');
          dueDate.innerHTML = todo.date;
          todoCard.appendChild(dueDate);

          const priority = document.createElement('div');
          priority.classList.add('priority');
          priority.innerHTML = todo.priority;
          todoCard.appendChild(priority);
        }
      })
    }
  }
}