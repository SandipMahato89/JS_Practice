console.log(Array.isArray("Sandip"));
console.log(Array.from("Sandip"));
console.log(Array.from({ name: "Sandip" })); // interesting here we have to specify from which value of object key or value parts will form the array or else will return an empty[] array

let score1 = 100;
let score2 = 90;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
