// Homework 1/12 funkcia so dve parametri

function removeElement(arr, numToRemove){
    const index = arr.indexOf(numToRemove);
    if (index > -1); {
        arr.splice(index, 1);
    }
    return arr;
}

const myArray = [1, 2, 3, 4, 5];
const numToRemove = 3;
const newArray = removeElement(myArray, numToRemove);
console.log(newArray);



// HomeWork 2//12 
let nums1 = [23, 43, 11, 17, 99];  // Without Loop
console.log(nums1.length);



// HomeWork 3//12
let nums = [5,6,7,3,3,4,6,7];    // With Loop 
let num = 0;
for(let i = 0; i < nums.length; i++){
    num++;
}
 console.log(num); 








let numbers = [5, 11, 33, 55, 75 ];

function getMaxNum(arr){
    let max = arr[0];
    for (item of arr) {
        if (item > max) {
            max = item;
        }
    }
    return max;
}

console.log(getMaxNum(numbers));




