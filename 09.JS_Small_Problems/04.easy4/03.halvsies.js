function halvsies(arr) {
  var numElemInFrstArr = Math.ceil(arr.length / 2);
  var frstArr = [];
  var scndArr = [];
  var i = 0;

  for (i = 0; i < numElemInFrstArr; i += 1) {
    frstArr.push(arr[i]);
  }

  for (i; i < arr.length; i += 1) {
    scndArr.push(arr[i]);
  }

  return [frstArr, scndArr]
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []])