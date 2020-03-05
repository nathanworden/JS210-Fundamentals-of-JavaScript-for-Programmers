function reverse(inputForReversal) {
  var output;
  if (Array.isArray(inputForReversal)) {
    output = [];
    for (var i = inputForReversal.length - 1; i >= 0; i -= 1) {
      output.push(inputForReversal[i])
    }
  } else {
    output = '';
    for (var i = inputForReversal.length - 1; i >= 0; i -= 1) {
      output += inputForReversal[i];
    }
  }

  return output;
}


console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]