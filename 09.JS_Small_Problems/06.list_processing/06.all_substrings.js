function substrings(str) {
  let output = [];
  for (let i = 0; i < str.length; i += 1) {
    output.push(substringsAtStart(str.slice(i)));
  }
  return output.flat();
}

function substringsAtStart(str) {
  return [...str].map((_, idx) => str.slice(0, idx + 1));
}

// function substrAtStart(string) {
//   return [...string].map((_, i) => string.slice(0, i + 1));
// }

// function substrings(string) {
//   return [...string].flatMap((_, i) => substrAtStart(string.slice(i)));
// }



console.log(substrings('abcde'));