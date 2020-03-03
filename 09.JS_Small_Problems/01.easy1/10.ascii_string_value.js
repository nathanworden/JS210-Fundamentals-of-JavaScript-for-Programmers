function asciiValue(str) {
  var output = 0;
  for (var i = 0; i < str.length; i += 1) {
    output += str.charCodeAt(i);
  }
  return output;
}


console.log(asciiValue('Four score'))       // 984
console.log(asciiValue('Launch School'))     // 1251
console.log(asciiValue('a'))                // 97
console.log(asciiValue(''))                 // 0