//  function

const createTask = (task) => {
  const listItems = document.getElementById('items');
  const listItem = document.createElement('li');
  const label = document.createElement('label');
  const checkBox = document.createElement('input');

  label.innerText = task;
  checkBox.type = 'checkbox';

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  listItems.append(listItem);
};

const addTask = () => {
  let inputValue = document.getElementById('new-task');
  createTask(inputValue.value);
  inputValue.value = '';
};
