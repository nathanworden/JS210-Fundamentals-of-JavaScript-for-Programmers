function union(arr1, arr2) {
  var output = [];
  arr1.forEach(function(ele) {
    if (!output.includes(ele)) {
      output.push(ele)
    }
  });

    arr2.forEach(function(ele) {
    if (!output.includes(ele)) {
      output.push(ele)
    }
  });

  return output
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]