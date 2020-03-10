function sequence(count, start) {
  if (count === 0) {return []}
  var output = [];
  var acc = 0;
  for (var i = 0; i < count; i += 1 ) {
    acc += start;
    output.push(acc)
  }

  return output
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []