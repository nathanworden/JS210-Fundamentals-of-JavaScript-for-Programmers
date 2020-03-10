function centerOf(str) {
  var even = str.length % 2 === 0;
  var centerIdx = Math.round((str.length / 2) - 1);
  if (even) {
    return str.slice(centerIdx, centerIdx + 2)
  } else {
    return str.slice(centerIdx, centerIdx + 1)
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"