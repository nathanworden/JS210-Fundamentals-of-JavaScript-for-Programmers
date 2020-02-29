// function logMultiples(number) {
//   for (var i = 101; i > number; i -= 2) {
//     if (i % number === 0) {
//       console.log(String(i));
//     }
//   }
// }

// logMultiples(17);

// logMultiples(21);



// Further Exploration


function logMultiples(number) {
  var multiple = Math.floor(100 / number) * number;

  for (var i = multiple; i > 0; i -= 1) {
    if (i % number === 0 && i % 2 === 1) {
      console.log(String(i));
    }
  }
}

logMultiples(17);
console.log(' ')
logMultiples(21);

