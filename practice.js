const firstName = "Md. Nazmul";
const middleName = "Hasan";
const lastName = "Shuvo";

// const fullName = firstName + middleName + lastName;
// console.log(fullName);

const fullName = `${firstName} + ${middleName} + ${lastName}`;
// console.log(fullName);

const part1 = `amar sunar bangla
ami tumay valobashi
chirodin tumar akash
tumar batash`;

console.log(part1);

// different ways to use function

//Normal Function ()
function add(a, b) {
  const output = a + b;
  return output;
}

const sum = add(5, 7);
console.log("Your Normal function result is: =", sum);

//function expression

const add2 = function (a, b) {
  return a + b;
};

const sum2 = add2(10, 5);
console.log("your Function expression result is: =", sum2);

// Arrow function
const add3 = (a, b) => a + b;
const sum3 = add3(30, 30);
console.log("Your arrow function result is: =", sum3);
