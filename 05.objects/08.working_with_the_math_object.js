// function convertRadiansToDegrees(radians) {
//   return (radians * 180) / Math.PI
// }


// var degrees = -180;
// console.log(Math.abs(degrees));


// console.log(Math.sqrt(16777216));

// console.log(Math.pow(16, 6));



// var a = 50.72;
// var b = 49.2;
// var c = 49.86;

// console.log(Math.floor(a));
// console.log(Math.ceil(b));
// console.log(Math.round(c));




function randomInt(min, max) {
  if (min > max) {
    var temp = min;
    min = max;
    max = temp;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);

}

console.log(randomInt(1, 5));