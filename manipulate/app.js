const divElement = document.createElement('div');
divElement.className = 'red';
divElement.setAttribute('id', 'red');
divElement.setAttribute('title', 'read more');
divElement.innerHTML = '<h1> hello</h1>';

const divContainer = document.getElementById('hello');
divContainer.appendChild(divElement);
