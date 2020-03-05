// function firstElementOf(arr) {
//   return arr[0];
// }

// function lastElementOf(arr) {
//   return arr[arr.length - 1];
// }

// function nthElementOf(arr, index) {
//   return arr[index]
// }


// function firstNOf(arr, count) {
//   return arr.slice(0, count)
// }

// var digits = [4, 8, 15, 16, 23, 42];
// console.log(firstNOf(digits, 3));    // returns [4, 8, 15]

// function lastNOf(arr, count) {
//   return arr.slice(arr.length - count)
// }

// var digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 3));    // returns [16, 23, 42]

// function lastNOf(arr, count) {
//   if (count > arr.length) {count = 0}

//   return arr.slice(count)
// }

// var digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 8));    // returns [4, 8, 15, 16, 23, 42]



function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]]
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]






















