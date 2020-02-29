// Convert a String to a Number
// For this exercise we're going to learn more about type conversion by implementing our own parseInt function that converts a string of numeric characters (including an optional plus or minus sign) to a number.

// The function takes a string of digits as an argument, and returns the appropriate number. Do not use any of the built-in functions for converting a string to a number type.

// For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

// Examples:

// stringToInteger('4321');      // 4321
// stringToInteger('570');       // 570


// My solution
// const convert = { 
//   "0": 0,
//   "1": 1, "2": 2, "3": 3,
//   "4": 4, "5": 5, "6": 6,
//   "7": 7, "8": 8, "9": 9
// }

// function stringToInteger(str) {
//   var split = str.split('')
//   transform = split.map( num => convert[num] )
//   joined = transform.join("")
// }


// stringToInteger('4321');      // 4321
// stringToInteger('570');       // 570



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


console.log(stringToInteger('4321'));      // 4321
// console.log(stringToInteger('570'));       // 570











