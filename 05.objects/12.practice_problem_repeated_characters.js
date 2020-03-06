function repeatedCharacters(string) {
  var str = string.toLowerCase();
  var counts = {}

  for (var i = 0; i < str.length; i += 1) {
    if (counts[str[i]] !== undefined) {
      counts[str[i]] += 1;
    } else {
      counts[str[i]] = 1;
    }
  }

  for (letter in counts) {
    if (counts[letter] <= 1) {
      delete counts[letter];
    }
  }

  return counts;
}


console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }