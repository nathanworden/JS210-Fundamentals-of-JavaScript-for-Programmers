function removeVowels(arr) {
  let output = [];
  arr.forEach(str => {
    output.push(str.replace(/[aeiou]/ig, ''));
  });

  return output;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]