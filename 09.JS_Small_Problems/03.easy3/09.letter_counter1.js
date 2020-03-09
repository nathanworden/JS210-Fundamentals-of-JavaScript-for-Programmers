function wordSizes(str) {
  var words = str.split(' ');
  var output = {};
  var crntLen;
  for (var i = 0; i < words.length; i += 1) {
    crntLen = words[i].length
    if (crntLen === 0) {return output}

    if (output[crntLen]) {
      output[crntLen] += 1;
    } else {
      output[crntLen] = 1;
    }
  }

  return output;
}


console.log(wordSizes('Four score and seven.') )//===                       { "3": 1, "4": 1, "5": 1, "6": 1 });
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')) //===   { "3": 5, "6": 1, "7": 2 });
console.log(wordSizes("What's up doc?")) //===                               { "2": 1, "4": 1, "6": 1 });
console.log(wordSizes('')) //===                                             {});