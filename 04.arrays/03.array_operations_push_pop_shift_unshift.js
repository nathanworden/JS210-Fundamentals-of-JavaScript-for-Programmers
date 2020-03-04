// function push(arr, value) {
//   arr[arr.length] = value
//   return arr.length;
// }

// var count = [0, 1, 2];
// console.log(push(count, 3));     // 4
// console.log(count);              // [ 0, 1, 2, 3 ]


// function pop(arr) {
//   var lastEle = arr[arr.length - 1];
//   arr.length = arr.length - 1;
//   return lastEle;
// }

// var count = [1, 2, 3];
// console.log(pop(count));             // 3
// console.log(count);                  // [ 1, 2 ]

// function unshift(arr, value) {
//   for (var i = arr.length; i > 0; i -= 1) {
//     arr[i] = arr[i - 1];
//   }

//   arr[0] = value;
//   return arr.length;
// }

// var count = [1, 2, 3];
// console.log(unshift(count, 0));      // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]



function shift(arr) {
  var frstv = arr[0];
  if (arr.length === 0) {return undefined}
  for (var i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i + 1]
  }

  arr.length = arr.length - 1;

  return frstv;
}


var count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]


























