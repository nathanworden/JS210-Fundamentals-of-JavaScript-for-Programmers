function missing(arr) {
  var first = arr[0];
  var last = arr[arr.length - 1];
  var output = [];

  for (var i = first; i < last; i += 1) {
    if (!arr.includes(i)){
      output.push(i)
    }
  }

  return output;
}



console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []