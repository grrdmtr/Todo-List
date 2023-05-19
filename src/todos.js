const todoFactory = (title, details, date, project) => {
  return { title, details, date, project, completed: false };
};

const getProjects = (array) => {
  let projects = [];
  array.forEach((element) => {
    projects.push(element.project);
  });
  const uniqProjects = [...new Set(projects)];

  return uniqProjects;
};

const toggleCompleted = (array, index) => {
  array[index].completed = !array[index].completed;
};

export { todoFactory, getProjects, toggleCompleted };
