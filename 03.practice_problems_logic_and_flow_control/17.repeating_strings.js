function repeat(string, times) {
  var output;
  if (times === 0) {return ""}
  if (!!times === false || times < 0 || typeof(times) !== 'number') {return undefined}

  output = '';
  for (var i = times; i > 0; i -= 1) { 
    output += string;
  }

  return output
}


console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined