// function lastInArray(arr) {
//   return arr[arr.length - 1];
// }

// function rollCall(arr) {
//   for (var i = 0; i < arr.length; i += 1) {
//     console.log(arr[i]);
//   }
// }

// function rollCall(arr) {
//   for (i = arr.length - 1; i >= 0; i -= 1) {
//     console.log(arr[i]);
//   }
// }


// function firstIndex(val, arr) {
//   var i;
//   var idx;
//   for (i = 0; i < arr.length; i += 1) {
//     if (arr[i] === val) {
//       idx = i;
//       break;
//     } else {
//       return -1
//     }

//   }
//   return idx;
// }


// function firstIndex(val, arr) {
//   var position = -1;
//   var i;
//   for (i = 0; i < arr.length; i += 1) {
//     if (arr[i] === val) {
//       position = i;
//       break;
//     }
//   }

//   return position;
// }

// console.log(firstIndex(2, [1, 2, 3]));
// console.log(firstIndex(9, [1, 2, 3]));




function arrToStr(arr) {
  var str = ''
  for (var i = 0; i < arr.length; i += 1) {
    str += String(arr[i]);
  }

  return str;
}


























