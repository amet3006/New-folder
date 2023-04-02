const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});
//homework 17 part 1
function validateForm() {
     const tel = document.getElementById('tel').value;
     const password = document.getElementById('password').value;
     const email = document.getElementById('email').value;
     const number = document.getElementById('number').value;
     const select = document.getElementById('select').value;
     const errorMessages = document.getElementById('errorMessages');
   
     errorMessages.innerHTML = '';
   
     if (tel === '') {
       errorMessages.innerHTML += '<p>Please enter your phone number.</p>';
     }
   
     if (password === '') {
       errorMessages.innerHTML += '<p>Please enter your password.</p>';
     }
   
     if (email === '') {
       errorMessages.innerHTML += '<p>Please enter your email address.</p>';
     }
   
     if (number === '') {
       errorMessages.innerHTML += '<p>Please enter a number.</p>';
     }
   
     if (select === '') {
       errorMessages.innerHTML += '<p>Please choose an option.</p>';
     }
   }
   
   // homework17 part 2
   const form1 = document.querySelector('form');
   form.addEventListener('submit', function(event) {
     event.preventDefault();
     saveUserInformation();
   });

   function saveUserInformation() {
     const age = document.getElementById('age').value;
     const name = document.getElementById('name').value;
   
     localStorage.setItem('age', age);
     sessionStorage.setItem('name', name);
   }

   window.addEventListener('load', function() {
     const age = localStorage.getItem('age');
     const name = sessionStorage.getItem('name');
   
     if (age !== null) {
       console.log('User age: ' + age);
     }
   
     if (name !== null) {
       console.log('User name: ' + name);
     }
   });

   // homework17 part 3

   function compareFiles() {
     const file1 = 'file1.txt';
     const file2 = 'file2.txt';
   
     fetch(file1)
       .then(response => response.text())
       .then(text1 => {
         fetch(file2)
           .then(response => response.text())
           .then(text2 => {
             if (text1.length > text2.length) {
               console.log('Text from file1.txt:');
               console.log(text1);
             } else {
               console.log('Text from file2.txt:');
               console.log(text2);
             }
           });
       });
   }
   compareFiles();
   

