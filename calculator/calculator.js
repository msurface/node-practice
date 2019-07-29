// storing command line values in variables
const calcType = process.argv[2];
const valueOne = parseInt(process.argv[3]);
const valueTwo = parseInt(process.argv[4]);

// storing output in a variable
let totalValue;
// // my first solutions
// if (calcType === 'add') {
//   console.log(valueOne + valueTwo);
// } else if (calcType === 'subtract') {
//   console.log(valueOne - valueTwo);
// } else if (calcType === 'multiply') {
//   console.log(valueOne * valueTwo);
// } else if (calcType === 'divide') {
//   console.log(valueOne / valueTwo);
// } else if (calcType === 'remainder') {
//   console.log(valueOne % valueTwo);
// } else if (calcType === 'exp') {
//   console.log(Math.pow(valueOne, valueTwo));
// }

// re-factored solution
if (calcType === 'add') {
  totalValue = valueOne + valueTwo;
} else if (calcType === 'subtract') {
  totalValue = valueOne - valueTwo;
} else if (calcType === 'multiply') {
  totalValue = valueOne * valueTwo;
} else if (calcType === 'divide') {
  totalValue = valueOne / valueTwo;
} else if (calcType === 'remainder') {
  totalValue = valueOne % valueTwo;
} else if (calcType === 'exp') {
  totalValue = Math.pow(valueOne, valueTwo);
} else {
  console.log('command not recogized');
}

console.log(totalValue);
