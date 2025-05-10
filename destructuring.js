// const information = {
//   name: "Shuvo",
//   age: 22,
//   address: "Dhaka",
// };

// const name = information.name;
// const age = information.age;
// const address = information.address;

// console.log(name);
// console.log(age);
// console.log(address);

const employee = {
  education: {
    diploma: "Diploma in CSE from (Mymensing Polytechnic Institute)",
    bsc: "Bsc in CSE from (Uttara University)",
  },

  address: {
    homeTown: "Tangail",
    division: "Dhaka",
  },
};

const education = employee.education;
const address = employee.address;

// console.log(education);
console.log({ ...address });
