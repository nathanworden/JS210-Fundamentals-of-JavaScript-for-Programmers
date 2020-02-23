// function getNumber(prompt) {
//   let rlSync = require('readline-sync');
//   let num = rlSync.question(prompt);
//   return num;
// }


// let num1 = getNumber('What is the first number?: ');
// let num2 = getNumber('What is the second number?: ');

// console.log(`${num1} * ${num2} = ${num1 * num2}`)

function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);