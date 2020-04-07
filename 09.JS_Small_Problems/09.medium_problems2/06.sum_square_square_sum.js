function sumSquareDifference(num) {
  let integers = Array.from(Array(num).keys())
  integers.push(num);
  let squareOfSum = integers.reduce((acc, ele) => acc + ele);
  squareOfSum = squareOfSum ** 2;
  let sumOfSquares = integers.reduce((acc, ele) => acc + ele ** 2);
  return squareOfSum - sumOfSquares;
}




console.log(sumSquareDifference(3)    === 22); //--> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)   === 2640);
console.log(sumSquareDifference(1)    === 0);
console.log(sumSquareDifference(100)  === 25164150);

//Book Answer
// function sumSquareDifference(num) {
//   var sum = 0;
//   var sumOfSquares = 0;
//   var i;

//   for (i = 1; i <= n; i += 1) {
//     sum += i;
//     sumOfSquares += Math.pow(i, 2);
//   }

//   return Math.pow(sum, 2) - sumOfSquares;
// }