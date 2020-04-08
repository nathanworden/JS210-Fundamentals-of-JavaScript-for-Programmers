// Problem
// Given two sorted arrays, return a combined array that is sorted. Sorting must not occur after the result array is created


// Algorithm
// Create an empty result array
// Iterate through each element in the longer input array. (If they are the same length take the furst one)
// Compare the current element to the next element in the shorter array
    // If the current element is smaller, push it into the result array
        // Increment the index of the current element array, but do not increment the other element array
    // if the current element is larger, push the shorter array element into the result array
        // Increment the index of the smaller array, decrement the index of the current element array
// Return result array

function merge(arr1, arr2) {
  let result = [];
  let longer = arr1.length >= arr2.length ? arr1 : arr2;
  let shorter = arr1.length < arr2.length ? arr1 : arr2;
  let shorterIdx = 0;
  for (let longerIdx = 0; longerIdx < longer.length; longerIdx += 1) {
    if (longer[longerIdx] <= shorter[shorterIdx]) {
      result.push(longer[longerIdx]);
    } else if (longer[longerIdx] > shorter[shorterIdx]) {
      result.push(shorter[shorterIdx]);
      longerIdx -= 1;
      shorterIdx += 1;
    } else {
      result.push(longer[longerIdx])
    }
  }

  return result;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]