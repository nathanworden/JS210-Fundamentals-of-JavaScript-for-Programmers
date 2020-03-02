function toLowerCase(string) {
  var downcase = ''
  for (var i = 0; i < string.length; i += 1) {
    if (/[A-Z]/.test(string[i])) {
      var asciiNumeric = string.charCodeAt(i);
      asciiNumeric += 32;
      downcase += String.fromCharCode(asciiNumeric);
    } else {
      downcase += string[i];
    }
  }
  return downcase;
}


console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"