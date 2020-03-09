// var age = prompt('What is your age?');
// var retireAt = prompt('At what age would you like to retire?');

// var yearsLeft = retireAt - age;
// var year = 2020 + yearsLeft;

// console.log(`It's 2020. You will retire in ${year}`);
// console.log(`You have only ${yearsLeft} years of work to go!`)


var age = parseInt(prompt('What is your age?'), 10);
var retirementAge = parseInt(prompt('At what age would you like to retire?'));

var today = new Date();
var currentYear = today.getFullYear();
var workYearsToGo = retirementAge - age;
var retirementYear = currentYear + workYearsToGo;

console.log(`It's Retirement year: ${retirementYear}`)

