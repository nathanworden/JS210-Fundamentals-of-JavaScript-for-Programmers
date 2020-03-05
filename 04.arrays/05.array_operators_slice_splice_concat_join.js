// function slice(arr, strIdx, endIdx) {
//   var output = [];
//   for (var i = strIdx; i < endIdx; i +=1) {
//     output.push(arr[i])
//   }
//   return output;
// }

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]


// function splice(arr, begin, remove) {
//   var output = [];
//   for (var i = begin; i < arr.length; i += 1) {
//     if (i < begin + remove) {
//       output.push(arr[i]);
//     }

//     arr[i] = arr[i + remove];
//   }

//   arr.length = arr.length - output.length;
//   return output;
// }

// var count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]



// function concat(arr1, arr2) {
//   var output = []


//   for (var i = 0; i < arr1.length; i += 1) {
//     output.push(arr1[i])
//   }

//   for (var i = 0; i < arr2.length; i += 1) {
//     output.push(arr2[i])
//   }

//   return output;
// }

// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ])


function join(arr, str) {
  var output = '';

  for (var i = 0; i < arr.length; i += 1) {
    output += String(arr[i]);
    if (i < arr.length - 1) { output += str}
  }

  return output;
}


console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'

















