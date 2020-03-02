function substr(string, start, length) {
  var substr = '';
  if (start < 0) {start = string.length + start}
  if (length > string.length) {length = string.length - start}
  var end = start + length;
  for (var i = start; i < end; i += 1) {
    substr += string[i];
  }

  return substr
}

var string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""