// store the paramater in a variable
const valueOne = parseInt(process.argv[2]);

// array to store all multiples of 6 less than valueOne
let valOneMults = [];

// 1. find all multiples of 6 less than valueOne
for (i = 0; i < valueOne; i++) {
  if (i % 6 === 0) {
    valOneMults.push(i);
  }
}
// testing to see if the push worked
// console.log(valOneMults);

console.log(
  valOneMults.reduce((accumulator, currentVal) => accumulator + currentVal)
);
