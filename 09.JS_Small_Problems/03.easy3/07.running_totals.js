function runningTotal(arr) {
  newArr = []
  accumulator = 0
  for (var i = 0; i < arr.length; i++ ) {
    accumulator += arr[i]
    newArr.push(accumulator)
  }

  return newArr;
}


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []


// Further Exploration:

// function runningTotal(arr) {
//   var acc = 0;
//   var previous;
//   var output;
//   return arr.map(function(ele) {
//     tooAdd = acc
//     acc += ele
//     return ele + tooAdd;
//   });
