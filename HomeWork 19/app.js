function objectToArray(obj) {
     const arr = [];
     for (const key in obj) {
       if (typeof obj[key] !== 'function') {
         arr.push({ key, value: obj[key] });
       }
     }
     return arr;
   }

   const exampleObj = {
     name: 'Shooter',
     age: 34,
     occupation: 'Software Engineer',
     sayHello: function() {
       console.log('Hello!');
     },
     sayGoodbye: function() {
       console.log('Goodbye!');
     }
   };
   
   const exampleArr = objectToArray(exampleObj);
   
   console.log(exampleArr);

//firstpart HomeWork 19

function arrayToObject(arr) {
     const obj = {};
     for (let i = 0; i < arr.length; i++) {
       obj[arr[i].key] = arr[i].value;
     }
     return obj;
   }

   const exampleArr1 = [
     { key: "name", value: "Shooter" },
     { key: "age", value:34 },
     { key: "occupation", value: "Software Engineer" }
   ];
   
   const exampleObj2 = arrayToObject(exampleArr);
   
   console.log(exampleObj);
   //second part Homework19

   function isEqual(object1, object2) {
     // Get the values of the first object
     const values1 = Object.values(object1);
     // Get the values of the second object
     const values2 = Object.values(object2);
     // Check if the arrays of values are equal
     return JSON.stringify(values1) === JSON.stringify(values2);
   }

const obj1 = { name: "Shooter", age: 34 };
const obj2 = { age:34, name: "Shooter" };
const obj3 = { name: "Jane", age: 25 };

console.log(isEqual(obj1, obj2)); // true
console.log(isEqual(obj1, obj3)); // false  //third part homework19