function insertRow() {
    let x = document.getElementById('myTable'). insertRow(0);
    let y = x.insertCell(0);
    let z = x.insertCell(1);
    y.innerHTML="Firstname";
    z.innerHTML="Lastname";
}
const table = document.getElementById('myTable');

table.style.border = '5px solid black';
table.style.padding = '10px';

for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    for (var j = 0; j < row.cells.length; j++) {
      var cell = row.cells[j];

      cell.style.border = "1px solid black";
    cell.style.padding = "10px";
    cell.style.backgroundColor = i % 2 == 0 ? "lightblue" : "lightgreen";
  }
  row.style.border = "1px solid black";
  row.style.backgroundColor = i % 2 == 0 ? "white" : "lightgray";

}

var firstLi = document.querySelector("#myList li:first-child");
  firstLi.style.color = "red";

  var secondLi = document.querySelector("#myList li:first-child + li");
  secondLi.style.color = "blue";


  var thirdLi = document.querySelector("#myList li:nth-child(3)");
  thirdLi.style.color = "green";
  var fourthLi = document.querySelector("#myList li:nth-child(4)");
  fourthLi.style.color = "green";

  
  var lastLi = document.querySelector("#myList li:last-child");
  lastLi.style.color = "purple";

  var listItems = document.querySelectorAll("#myList li");
      var firstNameInput = document.getElementById("first-name");
      var lastNameInput = document.getElementById("last-name");
      
     
      function logValues() {
        var firstName = firstNameInput.value;
        var lastName = lastNameInput.value;
        console.log("First Name: " + firstName);
        console.log("Last Name: " + lastName);
        
      
        listItems[0].textContent = "First Name: " + firstName;
        listItems[1].textContent = "Last Name: " + lastName;
      }

