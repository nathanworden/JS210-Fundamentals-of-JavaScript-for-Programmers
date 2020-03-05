function slice(arr, begin, end) {
  if (begin > arr.length) {begin = arr.length}
  if (end > arr.length) {end = arr.length}

  var output = [];
  for (var i = begin; i < end; i += 1) {
    output.push(arr[i]);
  }

  return output;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

var arr = [1, 2, 3];
console.log(slice(arr, 1, 3));                     // [2, 3]
console.log(arr);                                  // [1, 2, 3]




function splice(array, start, deleteCount, element1, elementN) {
  // ...
}