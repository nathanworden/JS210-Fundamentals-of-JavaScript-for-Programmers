// Problem
// Using merge sort, take an array and returns a new array that contains the values from the input array in sorted order


// Algorithm
// Divide the length of the array by 2 (and take the floor)
// Create two new arrays, one that is 0..middle and one that is middle + 1..end
// Iterate through these two arrays, if a sub array has more than length 1, repeat the process.
// Once the sub array has a length 1, call 


// function mergeSort(arr) {
//   let duos = [];
//   for (strIdx in arr) {
//     let idx = Number(strIdx);
//     if (idx % 2 === 0) {
//       let miniArr = [];
//       miniArr.push(arr[idx]);
//       if (arr[idx + 1] !== undefined) {
//         miniArr.push(arr[idx + 1]);
//       } 
//       if (idx === arr.length - 3 && arr[idx + 2] !== undefined && arr.length % 2 !== 0) {
//         miniArr.push(arr[idx + 2]);
//       }

//       if (idx !== arr.length - 1) {
//         duos.push(miniArr);
//       }
//     } 
//   }

//   return duos;
// }


//////////////////////////////////////////////////////////////////

// function mergeSort(arr) {
//   let halfLen = Math.floor(arr.length / 2);
//   let halfArrs = [arr.slice(0, halfLen), arr.slice(halfLen, arr.length)];
//     if (halfArrs.every(subArr => subArr.length === 1)) {
//       return merge(halfArrs[0], halfArrs[1]);
//     } else {
//         return halfArrs.map(subArr => {
//           if (subArr.length === 3) {
//             subArr = [[subArr[0], subArr[1]], [subArr[2]]];
//           }
//           return mergeSort(subArr);
//         });
//     }

// }

//////////////////////////////////////////////////////////////////

// Is the array backwards the same as forwards?
// If it is, return it up to be merged with another array
// If it isn't merge Sort it down to be split up
// Until the array is a 1 element array, split the array into two


// function mergeSort(arr) {
//   if (arr.length === 1) {return arr}
//   if (arr.length === 3) {
//     let two = merge([arr[0]], [arr[1]]);
//     let one = [arr[2]];
//     return merge(two, one);
//   }
//   let halfLen = Math.floor(arr.length / 2);
//   let firstHalf = arr.slice(0, halfLen);
//   let secondHalf = arr.slice(halfLen, arr.length);
//   return merge(mergeSort(firstHalf), mergeSort(secondHalf));
// }

//////////////////////////////////////////////////////////////////

function mergeSort(arr) {
  let subArr1;
  let subArr2;

  if (arr.length === 1) {return arr}

  subArr1 = arr.slice(0, arr.length / 2);
  subArr2 = arr.slice(arr.length / 2);

  subArr1 = mergeSort(subArr1);
  subArr2 = mergeSort(subArr2);

  return merge(subArr1, subArr2);
}



    //    [6, 2, 7, 1, 4]
    //[6, 2]          [7, 1, 4]
//  [6]   [2]       [7]    [1, 4]
//                        [1]   [4]

function merge(arr1, arr2) {
  let result = [];
  let longer = arr1.length >= arr2.length ? arr1 : arr2;
  let shorter = arr1.length < arr2.length ? arr1 : arr2;
  let shorterIdx = 0;
  for (let longerIdx = 0; longerIdx < longer.length; longerIdx += 1) {
    if (longer[longerIdx] <= shorter[shorterIdx]) {
      result.push(longer[longerIdx]);
      if (longerIdx === longer.length - 1) {result.push(shorter[shorterIdx])}
    } else if (longer[longerIdx] > shorter[shorterIdx]) {
      result.push(shorter[shorterIdx]);
      longerIdx -= 1;
      shorterIdx += 1;
    } else {
      result.push(longer[longerIdx])
    }
  }
  
    while (shorter[shorterIdx + 1] !== undefined) {
      result.push(shorter[shorterIdx + 1]);
      shorterIdx += 1;
    }


  return result;
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]
console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// // // // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]






///////
// Becaue of the way the book had implemented merge, it worked. I had pretty much the same merge sort function, but it didnt work the same way because my merge function was implemented differently.

// function mergeSort(array) {
//   var subArray1;
//   var subArray2;

//   if (array.length === 1) {
//     return array;
//   }

//   subArray1 = array.slice(0, array.length / 2);
//   subArray2 = array.slice(array.length / 2);

//   subArray1 = mergeSort(subArray1);
//   subArray2 = mergeSort(subArray2);

//   return merge(subArray1, subArray2);
// }

// function merge(array1, array2) {
//   var copy1 = array1.slice();
//   var copy2 = array2.slice();
//   var result = [];

//   while (copy1.length > 0 && copy2.length > 0) {
//     result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
//   }

//   return result.concat(copy1.length === 0 ? copy2 : copy1);
// }

