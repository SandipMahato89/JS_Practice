// console.log(2 > 4);
// console.log(2 <= 3);
// console.log(2 != 5);
// console.log(2 == 1);

//***some confusing comparisions */

// console.log("2" > 1); true;
// console.log("02" > 1); true;
// console.log("02" > 11); false;
// console.log("002" > 11); false;

// console.log(+null); value = 0
// console.log(null == 0); false
// console.log(+null == 0); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/*The reason is that a equality check  == and  > < >= <=  work differently
Comparisons convert null to a number, treating it as 0. bu equlity does not convert null to a number it convert this to undefined
That's why (3) null >= 0 is true and null >0 is false*/

// so avoid using this type of comparisions

// strict checking "==="

console.log("2" === 2);
