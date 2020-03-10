function multiplyList(arr1, arr2) {
  var output = [];
  for (var i = 0; i < arr1.length; i += 1) {
    output.push(arr1[i] * arr2[i]);
  }

  return output;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]