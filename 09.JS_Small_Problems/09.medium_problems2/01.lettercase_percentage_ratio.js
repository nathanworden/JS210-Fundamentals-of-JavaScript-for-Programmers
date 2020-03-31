// Problem:
// Create a function that takes a string and returns an object that
// gives the percentage of letters in the string that are lowercase, 
// uppercase and neither.

// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// Alogrithm
// Split the string by character
// obtain the total length of the array
// iterate through the array, incrementing the count of lowercase, uppercase, and neither
// divide the given amount by the total number of characters


function letterPercentages(str) {
  let arr = str.split('');
  let len = arr.length;
  let counts = {lowercase: 0, uppercase: 0, neither: 0,};
  arr.forEach(letter => {
    if (letter.match(/[a-z]/)) {
      counts['lowercase'] += 1;
    } else if (letter.match(/[A-Z]/)) {
      counts['uppercase'] += 1;
    } else {
      counts['neither'] += 1;
    }
  });

  let output = {};
  let keys = Object.keys(counts);
  keys.forEach(key => {
      output[key] = ((counts[key] / len) * 100).toFixed(2);
  });

  return output;
}



console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }








