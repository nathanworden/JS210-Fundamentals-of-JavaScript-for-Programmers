// function logOddNumbers(num) {
//   var i = 0;
//   do {
//     if (i % 2 === 1) {
//       console.log(i);
//     }

//     i += 1;
//   } while (i <= num)
// }

// logOddNumbers(19);



// Further Exploration
// function logOddNumbers(number) {
//   var i;
//   for (i = 1; i <= number; i += 2) {
//       console.log(i);
//   }
// }

// logOddNumbers(19);



// More Further Exploration

function logOddNumbers(number) {
  var i;
  for (i = 1; i <= number; i += 1) {
    if (i % 2 === 0) {
      continue;
    }

    console.log(i);
  }
}

logOddNumbers(19);