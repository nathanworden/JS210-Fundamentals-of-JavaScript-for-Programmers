//  loop through each character
//  If the current charcter is not the delimeter, save its index
// If the current is the delimeter, save the index of the character before and log the slice.


function splitString(string, delimeter) {
  if (delimeter === undefined) { 
    console.log('ERROR: No delimiter');
    return
  }

  var output = [];
  var strIdx = 0;
  var endIdx = 0;

  for (var i = 0; i < string.length; i += 1) {
      if (string[i] === delimeter || i === string.length - 1) {
        if (i === string.length - 1) {
          if (string[i] === delimeter) {
            endIdx = i;
          } else {
            endIdx = i + 1;
          }
        } else {
          endIdx = i;
        }

        output.push(string.slice(strIdx, endIdx));
        strIdx = i + 1;
        endIdx = i + 1;
    } else if (delimeter === '') {
      endIdx = i + 1;
      output.push(string.slice(strIdx, endIdx));
      strIdx = i + 1;
    }
  }

  output.forEach(ele => console.log(ele))
}


splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello