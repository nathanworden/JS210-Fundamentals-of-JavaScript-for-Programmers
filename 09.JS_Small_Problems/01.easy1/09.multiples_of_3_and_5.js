function multisum(int) {
  var output = 0;

  for (var i = 1; i <= int; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      output += i;
    }
  }

  return output;
}



console.log(multisum(3) === 3);
console.log(multisum(5) === 8);
console.log(multisum(10) === 33);
console.log(multisum(1000) === 234168);