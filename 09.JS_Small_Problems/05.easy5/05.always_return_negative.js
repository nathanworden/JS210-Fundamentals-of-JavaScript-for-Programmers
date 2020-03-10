// function negative(num) {
//   if (num === 0) {
//     return -0;
//   }
//   else if (num > 0) {
//     return -num;
//   } else {
//     return num;
//   }
// }

// function negative(number) {
//   return Math.abs(number) * -1;
// }

function negative(num) {
  return num < 0 ? num : num * -1;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0