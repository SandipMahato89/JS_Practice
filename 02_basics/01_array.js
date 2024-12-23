// Arrays
// here in javascript treat array jsut like list we treat in java which store data of variable type;

//here are different ways to create an array in js
const myArr = [1, 2, 3, 4, 5, 6];
const heros = ["hanuman", "Shaktiman", "Hatim"];
const myArr2 = new Array("Sandip", 1, 44, "Bablu");

// console.log(myArr2[0]);
// console.log(typeof myArr2[3]);

// methods in array
// here are some common methods in array

// 1. push() : it is used to add element at the end of array
myArr.push(7);
// console.log(myArr);
// 2. pop() : it is used to remove element from the end of array
myArr.pop();
// console.log(myArr);

// 3. shift() : it is used to remove element from the start of array
myArr.shift();
// console.log(myArr);

// 4. unshift() : it is used to add element at the start of array
myArr.unshift(1);
// console.log(myArr);

// 5. indexOf() : it is used to find the index of the element in array
// console.log(myArr.indexOf(2));
// 6. lastIndexOf() : it is used to find the last index of the element in
// array if found return 1 else -1
// console.log(myArr.lastIndexOf(2));
// 7. join() : it is used to join the elements of array in a string
// console.log(myArr.join());
// 8. reverse() : it is used to reverse the elements of array
// console.log(myArr.reverse());

//9.includes() : it is used to find whether the element exists or not if found return true else false
// console.log(myArr.includes(3));

console.log("A", myArr);
let newArr1 = myArr.slice(1, 4); // return a copy of data from start to end-1 indexed based values and it do not change the array or delete any values
console.log(newArr1);
console.log("B", myArr);

let newArr2 = myArr.splice(1, 4); // return values from start to end indexed based value and if change the array also deleted the values that are returned.
console.log(newArr2);

console.log("C", myArr);
