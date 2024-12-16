// Primitive Types

//7 types : Number, String, Boolean, BigInt, Null, Undefined, Symbol
console.log();

const score = 100;
const scoreValue = 100.89;

const isLoggedIn = true;
constOutsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123"); // Sysmbol return different value each time even if the same value is passed to it whether number string anything.

console.log(typeof id);

// console.log(id === anotherId);

// Reference Type(Non primitive types)
// types : Array, Objects, Functions

// Arrays
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "cherry"];

// Objects
const myObj = {
  age: 22,
  person: "Sandip",
  isPresent: true,
};

// Functions

const addNumber = function (a, b) {
  return a + b;
};

// console.log(addNumber(7, 8));
// console.log(typeof addNumber); // return function nut called as object function
// console.log(typeof myObj);

// ++++++++++++++++++++++++++++++++++++++++++

//Stack Memory used when we use any primitive data type and Heap Memory is used when we use any Non-primitive types
// Primitive types give a copy of data and if any changes made in current data does not affect the actual data
// Non-primitive types give a reference fo data and if any chnges made in current data then actual data is also gets affected.

let myName = "Sandip Mahato";
let myName2 = myName;

myName2 = "Gopal krinshnan Gokhale";
console.log(myName);
console.log(myName2);

let userOne = {
  userEmail: "sandip@gmail.com",
  phoneNmuber: 1234567899,
};

let userTwo = userOne;

userTwo.userEmail = "xyz@gmail.com";

console.log(userOne.userEmail);
console.log(userTwo.userEmail);
