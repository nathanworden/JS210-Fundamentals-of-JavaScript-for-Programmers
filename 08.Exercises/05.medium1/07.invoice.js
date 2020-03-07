function invoiceTotal() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i += 1) {
    sum += arguments[i];
  }

  return sum;
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?