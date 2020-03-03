
// function logInBox(str, width) {
//   var topBorder = "+";
//   var spaceLine = '|';
//   var pad = '';

//   var segments = Math.floor(str.length / (width - 4));

//   if (str.length > width) {
//     str = "| " + str.slice(0, width) + "..." + " |\n";
//     width += 5;
//   } else if (str.length === width) {
//     str = "| " + str.slice(0, width) + " |\n";
//     width += 2;
//   } else {
//     var diff = width - str.length;
//     var padLength = Math.floor(diff / 2);

//     for (var i = 0; i < padLength; i += 1) {
//       pad += " ";
//     }

//     str = "|" + pad + str + pad + "|\n"
//   }

//   for (var i = 0; i < width; i += 1) {
//     topBorder += '-'
//   }

//   topBorder += '+\n';

//   for (var i = 0; i < width; i += 1) {
//     spaceLine += ' ';
//   }

//   spaceLine += '|\n';

//   return segments;
//   return topBorder + spaceLine + str + spaceLine + topBorder;
// }

// console.log(logInBox('To boldly go where no one has gone before.', 10));

// console.log(logInBox('', 10));







///////////////////////////////////

function logInBox(text, max_width) {
  var numLines = 0;
  var lineLength = max_width - 4;
  var seperateLines = [];
  var individualLine = '';
  var linesWithpipes = [];
  var fullBox;
  var finalLine;
  var addLength = lineLength;
  var topLine = makeTopLine(max_width);
  var extraSpace = '';

  if (text.length > max_width) {
    numLines = Math.floor((text.length / lineLength) + 1);
    for (var i = 0; i < text.length; i += lineLength) {
      individualLine = text.slice(i, addLength)
      seperateLines.push(individualLine);
      addLength += lineLength;
    }

    finalLine = seperateLines[seperateLines.length - 1]

    for (var i = 0; i < lineLength - finalLine.length; i += 1) {
      seperateLines[seperateLines.length - 1] += " ";
    }

    linesWithPipes = seperateLines.map ((ele) => `|  ${ele}  |\n`);
    linesWithPipes.unshift(topLine);
    linesWithPipes.push(topLine);

    linesWithPipes.forEach((ele) => console.log(ele));
  } else if (text.length < max_width) {
    extraSpace = max_width + 2 - text.length;
    for (i = 1; i < Math.floor(extraSpace / 2); i += 1) {
      text = " " + text + " ";
    }

    if (max_width % 2 === 1) {
      console.log(topLine + "\n" + "|" + text + " |\n" + topLine);
    } else {
      console.log(topLine + "\n" + "|" + text + "|\n" + topLine);
    }
  } else if (text.length === max_width) {
      console.log(topLine + "\n" + "|" + text + "|\n" + topLine);
    }
}

function makeTopLine(max_width) {
  var topLine = "+-";
  for (var i = 0; i < max_width - 2; i += 1) {
      topLine += "-";
    }

  topLine += "-+";
  return topLine;
}

logInBox('To boldly go where no one has gone before.', 72);














