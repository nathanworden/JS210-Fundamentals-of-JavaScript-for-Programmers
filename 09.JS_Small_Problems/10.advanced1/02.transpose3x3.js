// Problem
// Given a nested 3x3 array, return the transpose of the input matric
// Do not mutate the original array

// Data Structure
// Array

// Algrorithm
// Create a new empty subArray for the number of elements one of the original subArrays has
// For Each subArray
  // For each element in the sub Array
    // Push the element into the empty subArray that has the same index



function transpose(mtrx) {
  let numRows = mtrx[0].length
  let output = [];
  for (let i = 0; i < numRows; i += 1) {
    output.push([]);
  }

  mtrx.forEach((subArr, outerIdx) => {
    subArr.forEach((element, eleIdx) => {
      output[eleIdx].push(element);
    });
  });

  return output;
}

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

let matrix2 = [
  [9, 12, 4],
  [3, 78, 9],
  [-2, 0, 100]
]

console.log(transpose(matrix2)) // [[9, 3, -2], [12, 78, 0], [4, 9, 100]]