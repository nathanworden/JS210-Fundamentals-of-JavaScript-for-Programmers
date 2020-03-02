function substring(string, start, end) {
  var substr = '';

  if (start === end) {
    return "";
  }

  if (end === undefined) {
    end = string.length;
  } else if (end < 0 || isNaN(Number(end))) {
    end = 0;
  } else if (end > string.length) {
    end = string.length;
  } 

  if (start < 0 || isNaN(Number(start))) {
    start = 0;
  } else if (start > string.length) {
    start = string.length;
  }

  if (start > end) {
    var temp = '';
    temp = start;
    start = end;
    end = temp;
  }

  for (var i = start; i < end; i += 1) {
      substr += string[i];
    }
  return substr;
}


var string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"


  // if (start > 0 && end > 0 && start < end && start < string.length && end < string.length) {
  //   substr = getIt(string, start, end);

