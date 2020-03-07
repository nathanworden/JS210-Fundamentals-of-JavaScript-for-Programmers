// function penultimate(string) {
//   var splitted = string.split(' ')
//   return splitted[splitted.length - 2];
  
// }

function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0]
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"