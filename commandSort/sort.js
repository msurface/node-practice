// Sorting CL numbers in a variable
let values = process.argv;
// creating and empty array
let valArr = [];

// looping though all CL values and pushing the numbers to the array
for (i = 2; i < values.length; i++) {
  valArr.push(parseInt(values[i]));
}

// sorting all numbers
valArr.sort(function(a, b) {
  return a - b;
});

// printing to the console.
console.log(valArr);
