const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let errorMessage = '';
  const inputs = form.querySelectorAll('input, textarea');
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      errorMessage = 'Please fill out all fields.';
      break;
    }
  }

  if (errorMessage) {
    alert(errorMessage);
  } else {
    alert('You are logged in');
  }
});
/*
const form1 = document.querySelector('form');
const inputs = form.querySelectorAll('input, textarea');

inputs.forEach(input => {
  const errorDiv = input.nextElementSibling;

  input.addEventListener('blur', () => {
    if (!input.value) {
      errorDiv.textContent = 'Please enter a value.';
    }
  });

  input.addEventListener('input', () => {
    errorDiv.textContent = '';
  });
});


form.addEventListener('submit', event => {
  event.preventDefault();

  let errorMessage = '';
  inputs.forEach(input => {
    if (!input.value) {
      errorMessage = 'Please fill out all fields.';
    }
  });

  if (errorMessage) {
    alert(errorMessage);
  } else {
    alert('OK');
  }
});
*/


const myButton = document.getElementById('myButton');
const resetButton = document.getElementById('resetButton');
let count = 0;

myButton.addEventListener('click', () => {
  count++;
  console.log(`Button clicked ${count} times.`);
});

resetButton.addEventListener('click', () => {
  count = 0;
  console.log('Count reset.');
});