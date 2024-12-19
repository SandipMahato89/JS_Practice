// Dates

let myDate = new Date();
// console.log(myDate.toString()); // output -> Thu Dec 19 2024 22:39:02 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // output -> Thu Dec 19 2024
// console.log(myDate.toISOString()); // output -> 2024-12-19T17:10:14.177Z
// console.log(myDate.toLocaleDateString()); // output -> 19/12/2024
// console.log(myDate.toLocaleString()); // output -> 19/12/2024, 10:42:14 pm

// let myCrateDate = new Date(2025, 0, 1);
// console.log(myCreateDate.toDateString()); //Sun Jan 19 2023

// let myCreateDate = new Date(2025, 0, 1, 5, 19);
// console.log(myCreateDate.toLocaleString()); // 1/1/2025, 5:19:00 am

let myCreateDate = new Date("10-09-2025");
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(myTimeStamp / 1000));
let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(newDate.getTime());
