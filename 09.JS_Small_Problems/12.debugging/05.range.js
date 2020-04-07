function range(end, start=0) {
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  var range = [];
  var element;
  for (element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }


// Examples

console.log(range(10, 20));
console.log(range(5));