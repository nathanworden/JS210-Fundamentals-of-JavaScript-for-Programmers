// let name = 'Victor';

// console.log(`Good Morning, ${name}.`);
// console.log(`Good Afternoon, ${name}.`);
// console.log(`Good Evening, ${name}.`);


// let rlSync = require('readline-sync');
// let first_name = rlSync.question("What's your first name?\n");
// let last_name = rlSync.questoin("What's your last name?\n);")
// console.log(`Good Morning, ${first_name} ${last_name}!`)


// function getName() {
//   let first_name = rlSync.question("What's your first name?: ");
//   let last_name = rlSync.question("What's your last name?: ");
//   console.log(`Hello ${first_name} ${last_name}`)
// }
// getName();

function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = readlineSYnc.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);
