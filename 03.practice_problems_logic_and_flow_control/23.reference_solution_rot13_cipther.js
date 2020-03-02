function rot13(text) {
  var transformed = '';
  var i;

  for (i = 0; i < text.length; i += 1) {
    transformed += rot13Character(text[i]);
  }

  return transformed;
}

function rot13Character(char) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = false;
  var initialIndex = alphabet.indexOf(char);
  var shiftedIndex;
  var transformed;

  if (initialIndex === -1) {
    initialIndex = alphabet.indexOf(char.toLowerCase());
    upperCase = true;
  }

  if (initialIndex === -1) {
    return char;
  }

  shiftedIndex = (initialIndex + 13) % 26;
  transformed = alphabet[shiftedIndex];

  if (upperCase) {
    transformed = transformed.toUpperCase();
  }

  return transformed;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.') === 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.');

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.



console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));