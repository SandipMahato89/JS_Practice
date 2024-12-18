const score = 90;
// console.log(scor

const balance = new Number(200);
// console.log(balanc

// console.log(balance.toString().length); // number to str
// console.log(balance.toFixed(2)); // togive precision value after po

const otherNumber = 129.8636;
// console.log(otherNumber.toPrecision(5

const hundreds = 50000000;
// console.log(hundreds.toLocaleString("en-IN"

//++++++++++++++++++++ Math ++++++++++++++++++++++++++++++
// console.log(Math);
const piValue = Math.PI;
// console.log(piValue.toFixed(4));
// console.log(piValue.toPrecision(4));

// console.log(Math.abs(-9));
// console.log(Math.round(5.5));
// console.log(Math.ceil(5.5));
// console.log(Math.floor(5.5));
// console.log(Math.sqrt(9));
// console.log(Math.pow(2, 3));
// console.log(Math.max(2, 3,4,1,7,2,8,5,9));
// console.log(Math.min(2, 3,4,1,7,2,8,5,9));

const value = Math.random(); // this generate a random value between 0-1
// console.log(value);

// console.log(Math.random() * 10 + 1);
// console.log(Math.floor(Math.random() * 10 + 1));

// now if we want get any random value within a certain range then we can do the below steps to get the desired value
const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
