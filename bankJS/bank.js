// requiring in file-system
const fs = require('fs');

// params passed in via command line
const command = process.argv[2];
const dollarAmount = process.argv[3];

// creating a switch to evaluate which command to execute

switch (command) {
  case 'total':
    console.log('total');
    total();
    break;
  case 'deposit':
    console.log('deposit');
    deposit();
    break;
  case 'withdraw':
    console.log('withdraw');
    withdraw();
    break;
}
// Calculate the total balance
function total() {
  fs.readFile('bank.txt', 'utf8', (err, data) => {
    if (err) {
      return console.error(err);
    }
    // console.log(data);
    // splitting the txt file into and array and converting them to numbers
    let dollarArr = data.split(',').map(Number);
    // console.log(dollarArr);
    let totalBal = dollarArr.reduce(
      (accumulator, currentVal) => accumulator + currentVal
    );

    console.log(`You're total balance is $${totalBal.toFixed(2)}`);
  });
}

// making a deposit to the bank account
function deposit() {
  fs.appendFile('bank.txt', ', ' + dollarAmount, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('Deposit has been added');
    }
  });
}

// making a withdraw from the bank account by adding a negative number to the account
function withdraw() {
  fs.appendFile('bank.txt', ', ' + `-${dollarAmount}`, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('Withdrawal has been made');
    }
  });
}
