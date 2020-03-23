function multiplyAllPairs(arr1, arr2) {
  let output = [];
  arr1.forEach(ele => {
    arr2.forEach(num => {
      output.push(ele * num);
    });
  });

  return output.sort((a, b) => {
    if (a > b) {return 1}
    if (b > a) {return -1}

    return 0;
    });
}


console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16])