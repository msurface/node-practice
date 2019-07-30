const request = require('request');
// Grab or assemble the movie name and store it in a variable called "movieName"
let nodeArgs = process.argv;
var movieName = '';

for (i = 2; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    movieName = movieName + '+' + nodeArgs[i];
  } else {
    movieName += nodeArgs[i];
  }
}
// ...

// Then run a request to the OMDB API with the movie specified
var queryUrl =
  'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&apikey=trilogy';

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

// Then create a request to the queryUrl
// ...
request(queryUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    // console.log(JSON.parse(body));
    console.log(`The movie was released on ${JSON.parse(body).Released}`);
  }
});
