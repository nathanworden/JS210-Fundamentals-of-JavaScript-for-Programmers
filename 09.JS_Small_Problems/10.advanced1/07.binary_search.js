var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];


// Algorithm
// Retrieve the middle value from the data
// if the middle value is equal to the target, return the index
// If the middle value is less than the target
    // Repeat the process using the second half of the data
// If the middle value is more than the target
    // Repeat the process using the first half of the data


function binarySearch(arr, target) {
  let  middleIdx = Math.floor(arr.length / 2 - 1);
  let mostIterations = Math.ceil(arr.length / 2) + 1;
  do {
    mostIterations -= 1;
    if (arr[middleIdx] < target) {
      let start = middleIdx + 1;
      let finish = arr.length - 1;
      let half = ((finish - start) / 2) <= 1 ? 1 : Math.floor((finish - start) / 2)
      middleIdx = middleIdx + half;
    } else if (arr[middleIdx] > target) {
      let start = 0;
      let finish = middleIdx;
      middleIdx = Math.floor((finish - start) / 2);
    }

    if (mostIterations === 0) {break}

  } while (arr[middleIdx] !== target);

  if (mostIterations === 0) {return -1}

  return middleIdx;
}

//Book answer

// function binarySearch(array, searchItem) {
//   var high = array.length - 1;
//   var low = 0;
//   var mid;

//   while (low <= high) {
//     mid = low + math.floor((high - low) / 2);
//     if (array[mid] === searchItem) {
//       return mid;
//     } else if (array[mid] < searchItem) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return -1;
// }


console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6








