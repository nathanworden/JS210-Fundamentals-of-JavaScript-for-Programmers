function stringy(num) {
  var output = '';
  for (var i = 1; i <= num; i += 1) {
    if (i % 2 === 1){
      output += "1";
    } else {
      output += "0"
    }
  }
  return output;
}


console.log(stringy(6) == "101010");
console.log(stringy(9) == "101010101");
console.log(stringy(4) == "1010");
console.log(stringy(7) == "1010101");