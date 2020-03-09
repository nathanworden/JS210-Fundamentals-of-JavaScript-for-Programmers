function wordSizes(str) {
  var words = str.split(' ');
  var output = {};
  var crntLen;
  for (var i = 0; i < words.length; i += 1) {
    var crntLen = 0;
    var crntwrd = words[i];
    for (var j = 0; j < crntwrd.length; j += 1) {
      if (/[a-zA-Z0-9]/.test(crntwrd[j])) {
        crntLen += 1
      }
    }

    if (crntLen === 0) {return output}

    if (output[crntLen]) {
      output[crntLen] += 1;
    } else {
      output[crntLen] = 1;
    }
  }

  return output;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}