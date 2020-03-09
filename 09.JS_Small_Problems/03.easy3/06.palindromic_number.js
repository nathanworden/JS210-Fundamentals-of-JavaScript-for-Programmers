// function isRealPalindrome(str) {
//   str = str.toLowerCase();
//   var filtered = str.split('').filter(ele => /[a-zA-Z]/.test(ele))
//   str = filtered.join('');
//   var output = filtered.reverse().join('');
//   return str === output;
// }

// function isPalindromicNumber(num) {
//   var stringNum = String(num)

//   return isPalindromicNumber(stringNum)
// }

function isPalindromicNumber(num) {
  var str = String(num);
  str = str.toLowerCase();
  var reversedStr = '';
  var filteredStr = '';
  for (var i = 0; i < str.length; i += 1) {
    if (/[0-9a-zA-Z]/.test(str[i])) {
      reversedStr = str[i] + reversedStr;
      filteredStr = filteredStr + str[i];
    }
  }

  return reversedStr === filteredStr;
}



console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true








