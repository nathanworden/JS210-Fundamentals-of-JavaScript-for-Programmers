function rot13(string) {
  var output = '';
  var currentChar;
  var oldIdx;
  const alphaDown = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const alphaUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  for (var i = 0; i < string.length; i += 1) {
    if (/[A-Z]/.test(string[i])) {
      oldIdx = alphaUp.findIndex((ele) => ele === string[i]);
      newIdx = (oldIdx + 13) % 26;
      currentChar = alphaUp[newIdx];
    } else if (/[a-z]/.test(string[i])) {
      oldIdx = alphaDown.findIndex((ele) => ele === string[i]);
      newIdx = (oldIdx + 13) % 26;
      currentChar = alphaDown[newIdx];
    } else if (/[^a-zA-z]/.test(string[i])) {
      currentChar = string[i];
    } 

    output += currentChar;
  }

  return output;
}


// console.log(rot13('a'));

console.log(rot13('Teachers open the door, but you must enter by yourself.') === 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.');

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.



console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));