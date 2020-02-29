// Convert a String to a Signed Number
// The previous exercise mimics the parseInt function to a lesser extent. In this exercise, you're going to extend that function to work with signed numbers.

// Write a function that takes a string of digits, and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

// You may assume the string will always contain a valid number.

// Examples:

// stringToSignedInteger('4321');      // 4321
// stringToSignedInteger('-570');      // -570
// stringToSignedInteger('+100');      // 100

// My answer:
// var DIGITS = {
//   '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
//   '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
// };

// function stringToSignedInteger(str) {
//   if (str[0] === '-') {
//     str = str.slice(1, str.length)
//     var neg = true
//   } else if (str[0] === '+') {
//     str = str.slice(1, str.length)
//   }

//   var value = 0;
//   var number = stringToNumber(str);


//   for (var i = 0; i < str.length; i += 1) {
//     value = 10 * value + number[i]
//   }

//   if (neg) {
//     value = ~value + 1
//   }

//   return value;
// }

// function stringToNumber(string) {
//   var result = [];

//   for (var i = 0; i < string.length; i += 1) {
//     result.push(DIGITS[string[i]]);
//   }

//   return result;
// }

// console.log(stringToSignedInteger('4321'));      // 4321
// console.log(stringToSignedInteger('-570'));      // -570
// console.log(stringToSignedInteger('+100'));      // 100


//////////////////////////////////////////////////////////

// Book Answer:
var DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToInteger(string) {
  var value = 0;
  var numbers = stringToNumbers(string);
  var i;

  for (i = 0; i < numbers.length; i += 1) {
    value = 10 * value + numbers[i];
  }

  return value;
}

function stringToNumbers(string) {
  var result = [];
  var i;

  for (i = 0; i < string.length; i += 1) {
    result.push(DIGITS[string[i]]);
  }

  return result;
}


function stringToSignedInteger(str) {
  switch (str[0]) {
    case '-': return -stringToInteger(str.slice(1));
    case '+': return stringToInteger(str.slice(1));
    default: return stringToInteger(str);
  }
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
























