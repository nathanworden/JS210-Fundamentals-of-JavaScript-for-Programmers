// function indexOf(arr, value) {
//   for (var i = 0; i < arr.length; i += 1) {
//     if (arr[i] === value) {return i}
//   }
  
//   return -1;
// }

// console.log(indexOf([1, 2, 3, 3], 3));         // 2
// console.log(indexOf([1, 2, 3], 4));            // -1



function lastIndexOf(arr, value) {
  for (var i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] === value) {return i}
  }

  return -1;
}


console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1