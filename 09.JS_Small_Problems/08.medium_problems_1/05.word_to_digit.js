// Problem:
// Take a string and convert numbers spelled out to digits
// input: string
// output: string with digit characters

// Test Cases:
// wordToDigit('Please call me at five five five one two three four. Thanks.');
// // "Please call me at 5 5 5 1 2 3 4. Thanks."

// wordToDigit('Today is day five of the quarentine')
// // 'Today is day 5 of the quarentine'

// Data Structure
// Array
// String

// Algorigthm
// Split the string on spaces
// Transform the elements of the Array:
    // If the element matches as a number, transform it to a digit
        // Create a constant object that maps words numbers to digits
    // join the string back together


//Code

// const translations = {
//   'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
//   'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine':'9',
// }

// function wordToDigit(str) {
//   let arr = str.split(' ');
//   let keys = Object.keys(translations);
//   let transformedArr = arr.map (word => {
//     if (keys.includes(word)) {
//       return translations[word];
//     } else {
//       return word;
//     }
//   });

//   return transformedArr.join(' ');
// }

var NUM_WORDS = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
};

function wordToDigit(sentence) {
  let regex = new RegExp(/\b(one|two|three|four|five|six|seven|eight|nine)\b/gi);
  return sentence = sentence.replace(regex, (matchedSubString) => {
    return NUM_WORDS[matchedSubString];
  });
}

console.log(wordToDigit('Today is day nine of the quarentine.'));



console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('Today is day nine of the quarentine.'));
// 'Today is day 5 of the quarentine'


console.log(wordToDigit('The weight is done.'));   





