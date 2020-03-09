function isPalindrome(str) {
  var reversedStr = ''
  for (var i = 0; i < str.length; i += 1) {
    reversedStr = str[i] + reversedStr;
  }

  return reversedStr === str;
}


// console.log(isPalindrome('Kaluah'));
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true