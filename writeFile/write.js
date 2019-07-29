// requiring in fs
const fs = require('fs');

fs.writeFile('movies.txt', 'Inception, Die Hard', function(err) {
  if (err) {
    return console.log(err);
  }

  console.log('movies.txt was updated');
});
