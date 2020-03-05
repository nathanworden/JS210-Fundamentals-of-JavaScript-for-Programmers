function concat() {
  var output = [];
  var currentArg;
   for (var i = 0; i < arguments.length; i += 1) {
    currentArg = arguments[i];
    if (Array.isArray(currentArg)) {
      for (var j = 0; j < currentArg.length; j += 1) {
        output.push(currentArg[j]);
      }
    } else {
      output.push(currentArg);
    }
  }

  return output;
}


console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]