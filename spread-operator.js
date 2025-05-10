// Spread operator
const fruits = ['apple', 'banana', 'cherry'];
const flowers = ['rose', 'lily', 'tulip'];

const combined = [...fruits, ...flowers];
// console.log (combined);


// Highes value and lowes value find out

const numbers = [5, 10, 15, 20, 25];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log ("The maximum value is:", max);
console.log ("The minimum value is:", min);