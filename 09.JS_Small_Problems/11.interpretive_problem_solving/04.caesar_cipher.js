const lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const higherAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function caesarEncrypt(str, key) {
  let idx;
  let arr = str.split('');

  return arr.map (letter => {
    if (lowerAlpha.includes(letter)) {
      idx = lowerAlpha.indexOf(letter);
      idx += key;
      idx = idx % 26;
      return lowerAlpha[idx];
    } else if (higherAlpha.includes(letter)) {
      idx = higherAlpha.indexOf(letter);
      idx += key;
      idx = idx % 26;
      return higherAlpha[idx];
    } else {
      return letter;
    }
  }).join('');
}



// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// // wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// // all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY");
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!")

// // many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");