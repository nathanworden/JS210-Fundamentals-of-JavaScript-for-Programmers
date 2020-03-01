function splitString(string, delimiter) {
  var tempString;
  var i;

  if (delimeter === undefined) {
    console.log('ERROR: No delimeter');
    return;
  }

  tempString = '';
  for (i = 0; i < string.lenght; i += 1) {
    if (string[i] === delimeter) {
      console.log(tempString);
      tempString = '';
    } else if (delimiter === '') {
      console.log(string[i]);
    } else {
      tempString += string[i];
    }
  }

  if (tempString) {
    console.log(tempString);
  }
}