// var int = parseInt(prompt("Please enter an integer greater than 0: "), 10);
// var operation = prompt('Enter "s" to compute the sum, or "p" to compute the product. ');
// var output;

// if (operation === 's') {
//   output = 0;
//   for (var i = 1; i <= int; i += 1) {
//     output += i;
//   }

//   console.log(`The sum of all the integers between 1 and ${int} is ${output}`);
// } else if (operation === 'p') {
//   output = 1;
//   for (var i = 1; i <= int; i += 1) {
//     output *= i;
//   }

//   console.log(`The product of all the integers between 1 and ${int} is ${output}`);
// }


//// Array input
var int = parseInt(prompt("Please enter an integer greater than 0: "), 10);
var operation = prompt('Enter "s" to compute the sum, or "p" to compute the product. ');
var input = [];
for (var i = 1; i <= int; i += 1) {
  input.push(i);
}
var output;

if (operation === 's') {
  output = input.reduce((acc, ele) => acc + ele, 0)

  console.log(`The sum of all the integers between 1 and ${int} is ${output}`);
} else if (operation === 'p') {
  output = input.reduce((acc, ele) => acc * ele, 1)

  console.log(`The product of all the integers between 1 and ${int} is ${output}`);
}