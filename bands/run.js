// requiring in bands
const bands = require('./bands');

// making sure the object is imported
// console.log(bands);

const param = process.argv[2];

// run a loop over the object and print out

const entries = Object.entries(bands);

for (const [keys, bandName] of entries) {
  if (!param) {
    console.log(`A ${keys} band is ${bandName}`);
  } else if (keys === param) {
    console.log(`A ${keys} band is ${bandName}`);
  }
}
