// function cleanUp(str) {
//   var result = [];
//   var word = '';
//   for (var i = 0; i < str.length; i += 1) {
//     if (/[a-zA-Z]/.test(str[i])) {
//       word += str[i];
//     } else if (/ /.test(str[i]) || i + 1 === str.length) {
//       result.push(word);
//       word = '';
//     }
//   }

//   return result.filter(ele => !!ele).map(ele => " " + ele).join('');
// }


// console.log(cleanUp("---what's my +*& line?"));   // " what s my line "



function cleanUp(str) {
  var result = '';
  for (var i = 0; i < str.length; i += 1) {
    if (/[a-zA-Z]/.test(str[i])) {
      result += str[i]
    } else if (result[result.length - 1] !== ' ') {
      result += ' '
    }
  }

  return result;
}


console.log(cleanUp("---what's my +*& line?") === " what s my line ");

















