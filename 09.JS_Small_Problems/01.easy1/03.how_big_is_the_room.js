var SQMETERS_TOSQFEET = 10.7639;
var inputType = prompt("What is the input type? (meters or feet)")
var length = parseInt(prompt(`Enter the length of the room in ${inputType}: `), 10);
var width = parseInt(prompt(`Enter the width of the room in ${inputType}: `), 10);
var convert;


var area = length * width;

if (inputType === 'meters') {
  convert = area * SQMETERS_TOSQFEET;
} else if (inputType === 'feet') {
  convert = SQMETERS_TOSQFEET / area
}



console.log(`The area of the room is ${area} square ${inputType} (${convert.toFixed(2)} square ${inputType})`)
