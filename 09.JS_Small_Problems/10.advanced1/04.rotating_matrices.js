// Problem
// Write a function that takes an arbitrary MxN matrix and rotates it clockwise by 90 degrees.

// Example
let bigMatrix = [
[ 1,  2,  3,  4,  5,  6],
[ 7,  8,  9, 10, 11, 12],
[13, 14, 15, 16, 17, 18]
];

// [
// [13,  7,   1],
// [14,  8,   2],
// [15,  9,   3],
// [16,  10,  4],
// [17,  11,  5],
// [18,  12,  6]
// ]

// Algorithm
// If an element is in the first row, then after the rotation it will be last column, eg if the index of its SubArr was 0, its index IN its new subArr will be length - 1.
// If an element is first in its row

// Look at the last row. The length of the last row is how many rows there will be in the new output.
// Look at the index of the first element of the last row. Put that element into the first row.

function rotate90(mtrx) {
  let lastRowIdx = mtrx.length - 1;
  let numRows = mtrx[lastRowIdx].length;
  let output = [];
  let reversed = [];

  for (let i = 0; i < numRows; i += 1) {
    output.push([]);
  }

  for (ele of mtrx) {
    reversed.unshift(ele);
  }

  reversed.forEach((subArr, outerIdx) => {
    subArr.forEach((ele, innerIdx) => {
      output[innerIdx].push(ele)
    });
  });

  return output;
}



var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]




