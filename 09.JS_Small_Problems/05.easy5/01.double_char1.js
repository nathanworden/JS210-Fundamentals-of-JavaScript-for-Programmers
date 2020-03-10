function repeater(str) {
  var output = '';
  for (var i = 0; i < str.length; i += 1) {
    output = output + str[i];
    output = output + str[i];
  }

  return output;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""