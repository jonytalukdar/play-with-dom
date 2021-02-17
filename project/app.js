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
  checkBox.addEventListener('click', function () {
    completedTask(task);
  });
};

const addTask = () => {
  let inputValue = document.getElementById('new-task');
  createTask(inputValue.value);
  inputValue.value = '';
};

const completedTask = (task) => {
  const completedList = document.getElementById('completed-task');
  const listItem = document.createElement('li');
  const label = document.createElement('label');
  const button = document.createElement('button');
  button.classList = 'delete';

  label.innerText = task;
  button.type = 'button';
  button.innerText = 'delete';

  listItem.appendChild(label);
  listItem.appendChild(button);

  completedList.append(listItem);
};
