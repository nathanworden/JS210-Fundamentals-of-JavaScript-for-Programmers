// loop through characters of str1 until the character matches the first letter in str2.
// loop through the characters of str2 to make sure they match up with subsequent characters of str1.


function indexOf(str1, str2) {
  var s2len = str2.length;

  for (var i = 1; i < str1.length; i += 1) {
    if (str1[i] === str2[0]) {
      if (str1.slice(i, i + s2len) === str2) {
        return i;
      }
    }
  }
  return -1;
} 

function lastIndexOf(str1, str2) {
  var s2len = str2.length;
  var s1len = str1.length;

  for (var i = s1len - 1; i > 0; i -= 1) {
    if (str1[i] === str2[s2len - 1]) {
      if (str1.slice(i - (s2len - 1), i + 1) === str2) {
        return i - s2len + 1;
      }
    }
  }
  return -1;
}

// console.log(indexOf('Some strings', 's'));                // 5
// console.log(indexOf('Blue Whale', 'Whale'));              // 5
// console.log(indexOf('Blue Whale', 'Blute'));              // -1
// console.log(indexOf('Blue Whale', 'leB'));                // -1


console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1