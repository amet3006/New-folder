//1, 0, “1”, “0”, “ten”, true, false, null, undefined, “”, ‘’.

let num1 = 1;
console.log("Boolean : " + Boolean(num1), "String : " + String(num1));

let num2 = 0;
console.log("Number : " + Number(num2), "String : " + String(num2));

let num3 = "1";
console.log("Number : " + Number(num3), "Boolean : " + Boolean(num3));

let num4 = "0";
console.log("Number : " + Number(num4), "Boolean : " + Boolean(num4));

let num5 = "ten";
console.log("Number : " + Number(num5), "Boolean : " + Boolean(num5));

let num6 = true;
console.log("Number : " + Number(num6), "String : " + String(num6));

let num7 = false;
console.log("Number : " + Number (num7), "String : " + String(num7));

let num8 = null;
console.log("Number : " + Number (num8), "Boolean : " + Boolean(num8));

let num9 = undefined;
console.log("Number : " + Number (num9), "String : " + String(num9));

let num10 = "";
console.log("Number : " + Number (num10), "Boolean : " + Boolean(num10));

let num11 = '';
console.log("Number : " + Number (num11), "Boolean : " + Boolean(num11));


//exercise 2 start 

const birthDay = 19;
let fullName = 'AmetAmeti';

console.log(fullName.length);

let birthYear = 1988;
let x = 19;
let y = 88;
let z = (19 - 88);
console.log(z);

let sumBirthYear = 1988;
let sum = (1 + 9 + 8 + 8);
console.log(sum);

let var1 = 10;
let var2 = 7;
let var3 = 20;
let var4 = 5;

let var5 = var1 > var2;
let var6 = var3 < var4;
let var7 = "I am the ";

if (var5 === true && var6 < 3) {
    console.log(var7 + "light");
} else{
    console.log(var7 + "darkness");
}