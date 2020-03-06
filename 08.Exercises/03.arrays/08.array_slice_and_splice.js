function slice(arr, begin, end) {
  if (begin > arr.length) {begin = arr.length}
  if (end > arr.length) {end = arr.length}

  var output = [];
  for (var i = begin; i < end; i += 1) {
    output.push(arr[i]);
  }

  return output;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// var arr = [1, 2, 3];
// console.log(slice(arr, 1, 3));                     // [2, 3]
// console.log(arr);                                  // [1, 2, 3]




function splice(arr, start, deleteCount, element1, elementN) {
  if (start > arr.length) {start = arr.length}
  if (deleteCount > arr.length - start) {deleteCount = arr.length - start}
  var output = [];
  var j = 0;

  if (deleteCount > 0) {
    for (var deleted = 0; deleted < deleteCount; deleted += 1) {
    output.push(arr[start])
    arr[start] = arr[start + 1];
    arr.length = arr.length - 1
    }
  }

  var numElementsToAdd = arguments.length - 3;

  if (arguments.length > 3) {
    for (var i = 0; i < arr.length; i += 1) {
    arr[arr.length - i] = arr[arr.length - i - 1];
    }

    for (var i = 0; i < numElementsToAdd; i += 1) {

      arr[start + i] = arguments[3 + j];
      j += 1;
    }
  }

  return output;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));             // [2]
console.log(arr);                                  // [1, "two", 3]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr);                                  // [1, "two", "three"]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                    // []
console.log(splice(arr, 1, 0, 'a'));               // []
console.log(arr);                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));               // []
console.log(arr);                                  // ["a", 1, 2, 3]
















