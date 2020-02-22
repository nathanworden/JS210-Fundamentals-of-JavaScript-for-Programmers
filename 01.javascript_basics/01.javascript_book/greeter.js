// let name = 'Victor';

// console.log(`Good Morning, ${name}.`);
// console.log(`Good Afternoon, ${name}.`);
// console.log(`Good Evening, ${name}.`);


let rlSync = require('readline-sync');
let first_name = rlSync.question("What's your first name?\n");
let last_name = rlSync.questoin("What's your last name?\n);")
console.log(`Good Morning, ${first_name} ${last_name}!`)
