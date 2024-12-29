//
// const instaUser = new Object();

const instaUser = {};

instaUser.id = "123abc";
instaUser.username = "Sandip";
instaUser.followers = 1000;
instaUser.isLoggedIn = false;

// console.log(instaUser);

//nested object

const newUser = {
  email: "sandip@gmail.com",
  fullname: {
    userfullname: {
      first: "Sandip",
      last: "Mahato",
    },
  },
};

//how to access them
// console.log(newUser.fullname.userfullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3["3"]);

// console.log(Object.keys(instaUser)); // extract all the keys and return an array
// console.log(Object.values(instaUser)); // extract all the values and return an array
// console.log(Object.entries(instaUser)); // extract all the key value as an array also return the key value array in whole singal array

// console.log(instaUser.hasOwnProperty("isLoggedIn")); // to check value is prespent or not in an object

// destructuring an object

const course = {
  coursenme: "JavaScript",
  courseInstructor: "Sandip",
  price: 999,
};
// console.log(course.coursenme);

const { courseInstructor: instructor } = course;
console.log(instructor);
