
function logInBox(str, width) {
  var topBorder = "+";
  var spaceLine = '|';
  var pad = '';

  if (str.length > width) {
    str = "| " + str.slice(0, width) + "..." + " |\n";
    width += 5;
  } else if (str.length === width) {
    str = "| " + str.slice(0, width) + " |\n";
    width += 2;
  } else {
    var diff = width - str.length;
    var padLength = Math.floor(diff / 2);

    for (var i = 0; i < padLength; i += 1) {
      pad += " ";
    }

    str = "|" + pad + str + pad + "|\n"
  }

  for (var i = 0; i < width; i += 1) {
    topBorder += '-'
  }

  topBorder += '+\n';

  for (var i = 0; i < width; i += 1) {
    spaceLine += ' ';
  }

  spaceLine += '|\n';


  return topBorder + spaceLine + str + spaceLine + topBorder;
}

console.log(logInBox('To boldly go where no one has gone before.', 40));

console.log(logInBox('', 40));