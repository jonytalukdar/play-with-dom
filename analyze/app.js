//  get element by id
// const newTask = document.getElementById('new-task');
// const header = document.getElementById('header');
// header.innerText = 'My Todo List';
// header.innerHTML = '<h1>hello</h1>';
// header.textContent = 'my todo list';

//  get element by className

// const container = document.getElementsByClassName('container');
// console.log(container);

// // style by using all element
// let items = document.getElementsByClassName('item');
// for (let i = 0; i < items.length; i++) {
//   const item = items[i];
//   item.style.color = 'red';
// }

//  style specific id
// const itemUl = document.getElementById('items');
// const items = itemUl.getElementsByClassName('item');
// for (let i = 0; i < items.length; i++) {
//   const item = items[i];
//   item.style.color = 'red';
// }

//   get element by tagName
// const ul = document.getElementsByTagName('li');
// console.log(ul);

// /// get element with queryselector

// let header = document.querySelector('h1');
// header.innerText = 'hello';

// let newTask = document.querySelector('#new-task');
// console.log(newTask);

let lastItem = document.querySelectorAll('.item:last-child');
// console.log(lastItem);
for (let i = 0; i < lastItem.length; i++) {
  const item = lastItem[i];
  item.style.color = 'red';
}
