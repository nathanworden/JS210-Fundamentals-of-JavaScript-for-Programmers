function reverseWords(str) {
  var arr = str.split(' ')
  var output = arr.map(function(ele) {
    if (ele.length >= 5) {
      return ele.split('').reverse().join('');
    } else {
      return ele;
    }
  });

  return output.join(' ')
}

console.log(reverseWords('Professional') ===              "lanoisseforP");
console.log(reverseWords('Walk around the block') ===     "Walk dnuora the kcolb");
console.log(reverseWords('Launch School') ===             "hcnuaL loohcS");