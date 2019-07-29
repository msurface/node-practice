const fs = require('fs');

fs.readFile('best_things_ever.txt', 'utf8', (error, data) => {
  if (error) {
    return console.error(error);
  }

  // console.log(data);

  let dataArr = data.split(',');

  // console.log(dataArr);

  for (i = 0; i < dataArr.length; i++) {
    console.log(dataArr[i]);
  }
});
