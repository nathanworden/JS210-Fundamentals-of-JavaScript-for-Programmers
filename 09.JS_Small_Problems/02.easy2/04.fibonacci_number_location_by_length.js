//  1, 1, 2, 3, 5, 8, 13, 21

function findFibonacciIndexByLength(numDigits) {
  var fibs = [1, 1];
  var fibsLength = fibs.length;
  var latestFib = fibs[fibsLength - 1];
  var latestFibDigits = String(latestFib).length

  for (var i = 0; latestFibDigits < numDigits; i += 1) {
    fibs.push(fibs[i] + fibs[i + 1]);
    fibsLength = fibs.length;
    latestFib = fibs[fibsLength - 1];
    latestFibDigits = String(latestFib).length
  }

  return fibsLength;
}


console.log(findFibonacciIndexByLength(2) === 7);
console.log(findFibonacciIndexByLength(10) === 45);
console.log(findFibonacciIndexByLength(16) === 74);