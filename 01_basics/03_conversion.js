// let num = 33;

let num = "33";
// console.log(typeof num);
// console.log(typeof num);

// let val = "33abc";
// let val = null;
// let val = true;
let val = undefined;

// let valueInNumber = Number(num);
// console.log(typeof val);
let valueInNumber = Number(val);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

/*
when the conversion hapeen to number take it as example then this happens so before using checking of the type is important

"33" -> 33
string(33abc) to number -> NaN(Not a number) special type
boolean to number -> false 0 and true 1
null to number -> 0
undefined to number -> NaN
Number, String all this things are object 
*/

// let isNum = 1; // 1 -> true ; 0 -> false
// let isNum = ""; // false
let isNum = "abc"; // true

let booleanIsNum = Boolean(isNum);
// console.log(booleanIsNum);

let data = 33;
let stringNumber = String(33);
// console.log(stringNumber);
// console.log(typeof data);
// console.log(typeof stringNumber);

// this conversion are very much helpful as we create any forms there we can make validation check whether the entered by the user is string or number accordingly we can proceed futher with requirement as the browser give mostly the strings values

// **********************************************************************************************

let value = 33;
let negValue = -value;
console.log(negValue);

// console.log(2 ** 3);

let str1 = "hello";
