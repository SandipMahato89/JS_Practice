//

const user = {
  username: "Sandip",
  age: 25,
  welcomemessage: function () {
    console.log(`${this.username} , welcome here`);
    console.log(this);
  },
};

// user.welcomemessage();
// user.username = "sasikant";
// user.welcomemessage();
// console.log(this);

// function test() {
//   username: "sandip";
//   console.log(this.username);
// }

// test();

// conclusion : this keyword applicable in objects only it is not applicable in functions

// arrow function

const one = () => {
  let username = "sandip";
  console.log(this.username);
};

// one();
//------------------------------------------

// conclusion : this keyword applicable in objects only it is not applicable in functions

//  and arrow function also not applicable in this keyword
//  -----------------------------------------------

// const addTwo = (num1, num2) => {
//   return num1 + num2; //explicit return
// };

// const addTwo = (num1, num2) => num1 + num2; // implicit return
// const addTwo = (num1, num2) => num1 + num2;

// how to return aobject from arrow function
const addTwo = (num1, num2) => ({ usrename: "sandip" });
console.log(addTwo(9, 7));
