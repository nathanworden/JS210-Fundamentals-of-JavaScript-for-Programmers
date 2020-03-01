function indexOf(str1, str2) {
  var m = str1.length;
  var n = str2.length;

  for (var i = 0; i < m; i += 1) {
    if (str1.slice(i, i + n) === str2) {
      return i;
    }
  }
  return -1;
}

function lastIndexOf(str1, str2) {
  var matches = [];
  var srch = str1;
  for (var i = 0; i < str1.length; i += 1) {
    srch = srch.slice(i, str1.length);
    var mtch = indexOf(srch, str2);
    if (mtch > -1) {
      if (srch !== str1) {
        matches.push(mtch + 1);
      } else {
        matches.push(mtch);
      }
      i += mtch;
    } 
  }

  if (matches.length > 0) {
    return matches.reduce((acc, ele) => acc + ele, 0)
  }
  return -1
}


// console.log(indexOf('Some strings', 's'));       // 5               
// console.log(indexOf('Blue Whale', 'Whale'));     // 5               
// console.log(indexOf('Blue Whale', 'Blute'));     // -1               
// console.log(indexOf('Blue Whale', 'leB'));       // -1   


console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1