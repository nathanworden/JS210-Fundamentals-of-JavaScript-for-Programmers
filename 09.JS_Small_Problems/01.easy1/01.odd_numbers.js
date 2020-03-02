// var i = 1;

// while (i < 100) {
//   console.log(i);
//   i += 2;
// }


var min = Number(prompt("What is the min number you dufus: "));
var max = Number(prompt("What is the max number you dum-dum: "));


do {
  if (min % 2 === 1) {
    console.log(min);
  } else {
    console.log(min + 1)
  }

  min += 2;

} while (min < max);