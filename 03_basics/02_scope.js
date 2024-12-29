// global and block level scopes

let a = 10;
const b = 20;
var c = 30;

if (true) {
  let a = 90;
  const b = 80;
  // var c = 70;
  // console.log("inner : ", a);
  // console.log("inner : ", b);
  // console.log("inner : ", c); // here c acting as global variable as its scope is all over but for variable a and b its scope till only the if block
}

// console.log("outer : ", a);
// console.log("outer : ", b);
// console.log("outer : ", c);

function one() {
  const username = "Sandip";

  function two() {
    const website = "Bookify";
    console.log(username);
  }
  // console.log(website);

  two();
}
one();
// two(); //not a good idea as scope is within the one() function

// ------------------------------------------------------------------------

function addOne(num) {
  return num + 1;
}

addOne(5);

const addTwo = function (num) {
  return num + 1;
};

addTwo(5);
