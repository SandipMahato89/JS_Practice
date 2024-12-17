const userName = "Sandip";
const age = 24;

//console.log(userName + age + " old");

//use of place holder for printing strings by concating them
// console.log(`My name is ${userName} and I'm ${age} years older.`);

const gameName = new String("Sandip0705");
// console.log(gameName[2]);
// console.log(gameName.length);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("d"));

const firstString = gameName.substring(0, 6);
const lastString = gameName.substring(6);
// console.log(firstString);
// console.log(lastString);

// //
// slice is used to substring a string but it is diffrent from the normal as here we can give the negative value as well
// and it will start from the end of the string
// and if we give two negative value then it will start from the end of the string and it
// will go to the end of the string
// console.log(gameName.length);

const anotherString = gameName.slice(-8, -1);
// console.log(anotherString);

const trimString = "     sandipmahato   ";
console.log(trimString);
console.log(trimString.trim());

//replace
const url = "https://sandip.com/sandip%20mahato";

console.log(url.replace("%20", "-"));
console.log(url.includes("%20%"));

console.log(url.split("/"));
