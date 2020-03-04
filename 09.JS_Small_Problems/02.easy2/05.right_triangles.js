// function triangle(num) {
//   var i;
//   for (i = 1; i <= num; i += 1) {
//     var stars = '';
//     var spaces = '';
//     var num_spaces;
//     for (var j = 0; j < i; j += 1) {
//       stars += "*";
//     }

//     num_spaces = num - i;
//     for (var k = 0; k < num_spaces; k += 1) {
//       spaces += " ";
//     }

//     console.log(`${spaces}${stars}`)
//   }
// }

// triangle(5);
// triangle(9);



function triangle(num) {
  if (num < 1) return '';

  var i = 0;
  while (i < num) {
    console.log(' '.repeat(num - 1 - i) + '*'.repeat(1 + i));
    i++;
  }
}

triangle(0);
triangle(5);
triangle(9);
triangle(15);