function sumOfSums(arr) {
  let subsequences = getSubsequences(arr);
  let sumOfSubsequence = sumEachSubsequence(subsequences)
  return sumOfSubsequence.reduce((acc, ele) => {
    return acc + ele;
  })
}

function getSubsequences(arr) {
  return arr.map(function(element, idx, inputArr) {
    return inputArr.slice(0, 1 + idx);
  });
}

function sumEachSubsequence(arr) {
  return arr.map(subArr => {
    return subArr.reduce((acc, ele) => {
      return acc + ele;
    });
  });
}


console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35