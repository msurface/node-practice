// storing & parsing the paramaters
const valueOne = parseInt(process.argv[2]);
const valueTwo = parseInt(process.argv[3]);

// initalizing an array to store variables
let multsArry = [];

for (i = 0; i < valueOne; i++) {
  if (i % valueTwo === 0) {
    multsArry.push(i);
  }
}

console.log(multsArry);

console.log(
  multsArry.reduce((accumulator, currentVal) => accumulator + currentVal)
);
