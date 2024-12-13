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

console.log(addNumber(7, 8));
console.log(typeof addNumber); // return function nut called as object function
console.log(typeof myObj);
