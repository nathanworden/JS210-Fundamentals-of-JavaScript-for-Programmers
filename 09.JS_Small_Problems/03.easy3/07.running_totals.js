function runningTotal(arr) {
  newArr = []
  accumulator = 0
  for (var i = 0; i < arr.length; i++ ) {
    accumulator += arr[i]
    newArr.push(accumulator)
  }

  return newArr;
}





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
