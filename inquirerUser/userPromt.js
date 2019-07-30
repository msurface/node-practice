// requiring in inquirer
const inquirer = require('inquirer');

// setting up the questions to ask via CL
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'username'
    },
    {
      type: 'password',
      message: 'Please set a password',
      name: 'password'
    },
    {
      type: 'list',
      message: 'Whats your favorite food?',
      choices: ['Taco', 'Cheeseburger', 'Pizza', 'Chicken', 'BBQ'],
      name: 'food'
    },
    {
      type: 'checkbox',
      message: 'Who is your favorite super hero',
      choices: [
        'Iron Man',
        'Aqua Man',
        ' Captain Marvel',
        'Deadpool',
        'Wolverine'
      ],
      name: 'Super Hero'
    },
    {
      type: 'confirm',
      message: 'Are you sure?',
      name: 'confirm',
      default: true
    }
  ])
  .then(answers => {
    // console.log(JSON.stringify(answers));
    answers = Object.entries(answers);
    // console.log(answers);
    for (const [key, input] of answers) {
      console.log(`Your ${key} is ${input}`);
    }
  });
