function shift(arr) {
  if (arr.length === 0) {return undefined}
  var first_ele = arr[0];

  for (var i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  return first_ele;
}


// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]


function unshift() {
  var arr = arguments[0];
  var addTimes = arguments.length - 1;
  var argSpot = 1;

  for (var j = addTimes; j > 0; j -= 1) {
    for (var i = arr.length; i >= 0; i -= 1) {
      arr[i] = arr[i - 1];
    }

    arr[0] = arguments[argSpot];
    argSpot += 1;
  }

  return arr.length;
}



console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]