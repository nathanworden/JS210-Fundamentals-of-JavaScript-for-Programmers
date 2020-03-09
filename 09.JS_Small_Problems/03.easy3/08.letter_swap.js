function swap(str) {
  var chars = str.split(' ');
  var characters = '';
  var temp = '';
  var mapped = chars.map (function (word) {
    characters =  word.split('')
    temp = characters[0];
    characters[0] = characters[characters.length - 1];
    characters[characters.length - 1] = temp;
    return characters.join('');
  });
  return mapped.join(' ');
}


console.log(swap('Oh what a wonderful day it is') ===   "hO thaw a londerfuw yad ti si");
console.log(swap('Abcde') ===                        "ebcdA");
console.log(swap('a') === "a");