// IIFE -> Immediately Invoked Function Expression
// this mainly done to avoid the pollution(variable or function) coming from global scope which may cause problem or can create confusion

// ()()

//named iife
(function chai() {
  console.log(`DB Connected`);
})();

//unnamed iife (arrow function)
((name) => {
  console.log(`${name}, DB Connected two `);
})("sandip");
