// Problem
// Write a function that takes the length of the three sides of a triangle as arguments and returns diether equilateral, isosceles, or scalene.

// rules:
// The sum of the lengths of the two shortest sides must be greater than the length of the longest side.
// Every side must have a length greater than 0



function triangle(side1, side2, side3) {
  let arr = [side1, side2, side3];
  if ((!arr.every(side => side > 0))) {return 'invalid'}
  let sorted = arr.sort();
  if (sorted[0] + sorted[1] <= sorted[2]) {return 'invalid'}

  if (sorted[0] === sorted[1] && sorted[1] === sorted[2]) {return 'equilateral'}
  if (sorted[0] !== sorted[1] && sorted[0] !== sorted[2] && sorted[1] !== sorted[2]) {return 'scalene'}
  return 'isosceles';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"