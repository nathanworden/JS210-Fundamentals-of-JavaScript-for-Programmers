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


console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]