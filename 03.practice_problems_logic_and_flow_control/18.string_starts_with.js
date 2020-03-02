function startsWith(string, searchString) {
  for (var i = 0; i < searchString.length; i += 1) {
    if (string[i] !== searchString[i]) {
      return false
    }
  }
  return true
}


var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false