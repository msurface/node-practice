// 1. require in inquirer
const inquirer = require('inquirer');

// 5. create zombie and user health points variables -- Global variables
let userHealth = 50;
let zombieHealth = 15;

// 7. check to see if user or zombie health is at 0

// if either is zero declare a winner/loser

function checkWinner() {
  // if not at zero replay round
  if (userHealth <= 0) {
    console.log('zombie is the winner!');
    process.exit();
  }

  if (zombieHealth <= 0) {
    console.log('You beat the zombie!');
    process.exit();
  }

  playGame();
}

// 2. create and inquirer prompt asking user to guess a number between
// 1 & 5. Use an list or checkbox

function playGame() {
  inquirer
    .prompt([
      {
        type: 'checkbox',
        message: 'Which number do you pick?',
        choices: ['1', '2', '3', '4', '5'],
        name: 'guess'
      }
    ])
    .then(answers => {
      answers = Object.values(answers);
      // console.log(answers);
      // 3. take the user entry store in a variabel
      // turn string into a number
      const userNum = parseInt(answers[0]);
      // console.log(userNum);

      // 4. create a zombie guess at random between 1 & 5 then store in variable
      const zombieNum = randomNumber(1, 5);
      // console.log('Zombine rando: ' + zombieNum);

      // 6. compare your guess and zombie guess
      if (userNum === zombieNum) {
        // 6a. if your guess is correct zombie health goes down
        zombieHealth -= randomNumber(1, 5);
        // console.log('user won this round');
        checkWinner();
      } else {
        // 6b. if your guess is incorrect your health goes down
        userHealth -= randomNumber(1, 5);
        // console.log('zombie won this round');
        checkWinner();
      }
      console.log(' ');
      console.log(' ');
      console.log('CURRENT SCORES');
      console.log(`Zombie Score: ${zombieHealth}`);
      console.log(`Your Score: ${userHealth}`);
    });
}

playGame();

// the game ends when either zombie or user health is at 0

// helper function to calculate a random number for the zomie choice.
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
