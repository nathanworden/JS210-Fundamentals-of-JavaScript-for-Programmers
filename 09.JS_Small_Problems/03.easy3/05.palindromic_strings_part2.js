// function isRealPalindrome(str) {
//   str = str.toLowerCase();
//   var filtered = str.split('').filter(ele => /[a-zA-Z]/.test(ele))
//   str = filtered.join('');
//   var output = filtered.reverse().join('');
//   return str === output;
// }

function isRealPalindrome(str) {
  str = str.toLowerCase();
  var reversedStr = '';
  var filteredStr = '';
  for (var i = 0; i < str.length; i += 1) {
    if (/[1-9a-zA-Z]/.test(str[i])) {
      reversedStr = str[i] + reversedStr;
      filteredStr = filteredStr + str[i];
    }
  }

  return reversedStr === filteredStr;
}


console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false