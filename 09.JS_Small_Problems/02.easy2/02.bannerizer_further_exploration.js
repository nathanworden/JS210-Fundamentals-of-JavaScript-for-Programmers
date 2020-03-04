
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
logInBox('To boldly go where no one has gone before.', 15);







////////
// Write a function that will take a short line of text, and write it to the console log within a box.

// Examples:

// function line(ending, pattern, size) {
//   console.log(ending + pattern.repeat(size) + ending);
// }

// function padRight(line, length) {
//   white = length - line.length;
//   line += ' '.repeat(white);
//   line += ' |'
//   return line;
// }

// function wrapSentence(sentence, length) {
//   let chars = sentence.length;
//   let words = sentence.split(' ');
//   let count = 0;
//   let line = '| ';

//   for (let i = 0, word, wordLen, white; i < words.length; i += 1) {
//     word = words[i] + ' ';
//     wordLen = word.length;

//     if (line.length + wordLen > length - 2) { 
//       line = padRight(line, length);
//       console.log(line);
//       line = '| ';
//       count = 0;
//     }

//     line += word;
//     count += wordLen;
//   }
  
//   line = padRight(line, length);
  
//   if (line) console.log(line);
// }

// function logInBox(sentence, max = 80) {
//   let strLen = sentence.length;
//   let len = strLen + 2;

//   let length = Math.min(len, max);

//   line('+','-', length);
//   line('|',' ', length);

//   if (sentence === '') {
//     line('|',' ', length);
//   } else {
//     wrapSentence(sentence, length);
//   }

//   line('|',' ', length);
//   line('+','-', length);
// }





// let str = 'An unnamed narrator approaches the house of Usher on a “dull, dark, and soundless day.” This house—the estate of his boyhood friend, Roderick Usher—is gloomy and mysterious. The narrator observes that the house seems to have absorbed an evil and diseased atmosphere from the decaying trees and murky ponds around it.'

// logInBox(str, 50);


// logInBox('To boldly go where no one has gone before.');
// // will log on the console:

// // +--------------------------------------------+
// // |                                            |
// // | To boldly go where no one has gone before. |
// // |                                            |
// // +--------------------------------------------+
// logInBox('');
// // +--+
// // |  |
// // |  |
// // |  |
// // +--+














