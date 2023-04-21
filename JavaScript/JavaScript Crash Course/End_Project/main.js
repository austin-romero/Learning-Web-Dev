// DOM = document object model
/*
// single  element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

// multiple elements
console.log(document.querySelectorAll('.item'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));


const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.lastElementChild.textContent = 'Hello amigo';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello Amigo</h1>';

const ul = document.querySelector('.items');

const btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
    e.preventDefault(); //this prevents the form from submitting again
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
  });
  */

  // USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`Name: ${nameInput.value} | Email: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}