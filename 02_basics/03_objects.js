//ways ti declare an object

// 1. singleton -> it is amde using constructor
// Object.create;

// 2. object literals
//how to create symbol and use inside object
const sym = Symbol("my symbol");

const JsUser = {
  name: "Sandip",
  age: 24,
  location: "Kolkata",
  hobbies: ["Coding", "Reading"],
  email: "sandip@gamil.com",
  isLoggedIn: false,
  "full name": "Sandip Mahato",
  [sym]: "My Sys",
};
// console.log(JsUser);

// now how to access the object element or data
// console.log(JsUser.name);
// console.log(JsUser["location"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[sym]);

// how to update value in object

JsUser.name = "Hitesh Mahato";
// Object.freeze(JsUser);
JsUser.name = "Sandip";
// console.log(JsUser);

// how to add a function in an object

JsUser.greetingOne = function () {
  console.log("Hello Bhai");
};

JsUser.greetingTwo = function () {
  console.log(`Hello Bhai, ${this.name}`);
};

console.log(JsUser.greetingOne());
console.log(JsUser.greetingTwo());
