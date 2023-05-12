const todoFactory = (title, description, date) => {
  // const title = prompt('Insert task title');
  // const description = prompt('Insert task description');
  // const date = prompt('Insert deadline (dd-mm-yyyy)');
  // const priority = prompt('Insert priority (low, medium, high)');

return { title, description, date };
}

export default todoFactory;
