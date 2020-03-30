// Problemn
// Write a function that takes a word string as an argument, and returns 
// true if the word can be spelled using the set of blocks. False otherwise.

// Rules: Letters are case insentive
// You can spell words only if they do not use both letters from any given block.


// isBlockWord('BATCH');      // true
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true
// isBlockWord('cUp');        // false
// isBlockWord('Bat');        // true
// isBlockWord('AA');         // false
// isBlockWord('BXCJMIL');    // true

// Data Structure
// Object / Hash

// Algorithm
// Uppercase the whole word
// Set up an object with the blocks
// Iterate through each letter of the input word
    // if the letter is in the object, remove both the key and its value
    // if the letter isn't in the object, return false
// If the loop fininshes without returing false, return true


// Code

const blocks = {
  'B':'O',   'X':'K',   'D':'Q',   'C':'P',   'N':'A',
  'G':'T',   'R':'E',   'F':'S',   'J':'W',   'H':'U',
  'V':'I',   'L':'Y',   'Z':'M',
}

function isBlockWord(str) {
  str = str.toUpperCase();
  let array = str.split('');
  let unique = array.filter((letter, idx, arr) => {
    return arr.indexOf(letter) === idx;
  })

  if (unique.length !== str.length) {return false};

  for (let key in blocks) {
    if (str.includes(blocks[key]) && str.includes(key)) {return false}
  }

  return true;
}


console.log(isBlockWord('BATCH')    === true     )  
console.log(isBlockWord('BUTCH')    === false)
console.log(isBlockWord('jest')     === true)
console.log(isBlockWord('cUp')      === false)
console.log(isBlockWord('Bat')      === true)
console.log(isBlockWord('AA')       === false)
console.log(isBlockWord('BXCJMIL')  === true)
console.log(isBlockWord('jest') === true);






