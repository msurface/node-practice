// Passing in values and indexing them
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// MY FIRST SOLUTION
// checking if two values are the same
// if (process.argv[2] !== process.argv[3]) {
//   console.log('Values are not equal');
// } else {
//   console.log('Values are equal');
// }

// Re-factored solution
console.log(process.argv[2] === process.argv[3]);
