function swapCase(str) {
  let chars = [...str];
  return chars.map(letter => {
    if (letter.match(/[^a-zA-Z]/)) {
      return letter;
    } else if (letter === letter.toUpperCase()) {
      return letter.toLowerCase();
    } else if ( letter === letter.toLowerCase()) {
      return letter.toUpperCase();
    }
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"