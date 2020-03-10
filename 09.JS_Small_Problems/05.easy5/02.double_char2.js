function doubleConsonants(str) {
  var output = '';
  for (var i = 0; i < str.length; i += 1) {
    if (/[^aeiou0-9\W]/.test(str[i])) {
      output = output + str[i];
      output = output + str[i];
    } else {
      output = output + str[i];
    }
  }

  return output;
}

console.log(doubleConsonants('String') ===           "SSttrrinngg");
console.log(doubleConsonants('Hello-World!') ===     "HHellllo-WWorrlldd!");
console.log(doubleConsonants('July 4th') ===         "JJullyy 4tthh");
console.log(doubleConsonants('') ===                 "");