function isRealPalindrome(str) {
  str = str.toLowerCase();
  var filtered = str.split('').filter(ele => /[a-zA-Z]/.test(ele))
  str = filtered.join('');
  var output = filtered.reverse().join('');
  return str === output;
}

function isPalindromicNumber(num) {
  var stringyNum = String(num)

  return isPalindromicNumber(stringNum)
}