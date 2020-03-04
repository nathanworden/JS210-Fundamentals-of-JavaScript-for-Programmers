function findFibonacciIndexByLength(length) {
  var first = 1;
  var second = 1;
  var index = 2;
  var fibonacci;

  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}