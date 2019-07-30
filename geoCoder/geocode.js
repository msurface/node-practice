// require in the geocoder package
const geocoder = require('geocoder');

// 1. store process.argv in a variable
let clValues = process.argv;

// 2. looping over all values and turning them into one string
let place = '';

for (i = 2; i < clValues.length; i++) {
  place = place + ' ' + clValues[i];
}

// logging the address
console.log('Searching for ' + place);

// setting up our geocoder function to find info on the place
geocoder.geocode(place, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});
