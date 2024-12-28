function printData() {
  console.log("S");
  console.log("A");
  console.log("N");
  console.log("D");
  console.log("I");
  console.log("P");
}

// printData();

// function addTwoNumber(number1, number2) {
//   console.log(number1 + number2);
// }
function addTwoNumber(number1, number2) {
  //   console.log(number1 + number2);
  return number1 + number2;
}

const result = addTwoNumber(2, 3);
// console.log("Result : ", result);

function loginUserMessage(username = "bot") {
  // if(username === undefined){
  //     console.log("Please enter your username");
  //     return;
  // }
  if (!username) {
    console.log("Please enter your username");
    return;
  }
  //   console.log(`${username} just logged in`);
  return `${username} just logged in`;
}

const res = loginUserMessage("Sandip");
// console.log(res);

function calculatedCartPrice(val1, val2, ...nums) {
  return nums;
}

console.log(calculatedCartPrice(10, 20, 30, 40));
const user = {
  username: "Sandip",
  age: 25,
};

function handleObject(anyobject) {
  console.log(`Username : ${anyobject.username} and age : ${anyobject.age}`);
}

// handleObject(user);

//another way of passing object as an argument

handleObject({
  username: "Sandip",
  age: 25,
});

// now passing an array to a function as an argument

const anyArray = [1, 2, 3, 4, 5, 6];

function returnSecondValue(dataArray) {
  return dataArray[1];
}

// console.log(returnSecondValue(anyArray));

console.log(returnSecondValue([9, 8, 7, 6, 5, 4]));
