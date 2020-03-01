// Loop through the string until the current character is not a space. Save that index.
// Keep looping until you find the next space.
    //  When you find a space, check and see if the next character is either the end of the string or another space.
    // If the next character is another space, save the current index and keep looping until you hit another character or reach the end of the string.
        // If you hit another character, you can forget the spaced index.
        // If you hit the end then take off the front and end spaces.


  function trim(str) {
    var frntcut = 0;
    var endcut = str.length - 1;
    var i = ' ';

    while (i === ' ') {
      i = str[frntcut];
      frntcut += 1;
    }

    for (var i = str.length - 1; i > 0; i -= 1) {
      if (str[str.length - 1] !== ' ') {
        endcut += 1;
        break
      }

      if (str[i] === ' ' && str[i - 1] !== ' ') {
        endcut = i;
        break
      }
    }

    frntcut -= 1;
    var output = str.slice(frntcut, endcut);
    return [output, output.length];
  }


console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""

