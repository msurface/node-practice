const paramOne = process.argv[2];
const paramTwo = process.argv[3];

console.log(paramOne === paramTwo);

console.log(
  `Are the arguments multiples of 7: ${
    paramOne && paramTwo % 7 === 0 ? true : false
  }`
);
