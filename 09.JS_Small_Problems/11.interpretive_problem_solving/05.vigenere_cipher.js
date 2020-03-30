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



function vigenerteCipher(str, keystr) {
  let noPunc = str.replace(/[^a-zA-Z]/g, '');
  let numSegs =  Math.ceil(noPunc.length / keystr.length);
  let fullKey = keystr.repeat(numSegs);
  fullKey = fullKey.slice(0, noPunc.length);

  for (let i = 0; i < str.length; i += 1) {
    if (str[i].match(/[^a-zA-Z]/)) {
      let keyArr = fullKey.split('');
      keyArr.splice(i, 0, str[i]);
      fullKey = keyArr.join('');
    }
  }

  let output = [];
  for (let i = 0; i < str.length; i += 1) {
    if (str[i].match(/[a-zA-Z]/)) {
      let keyIdx = lowerAlpha.indexOf(fullKey[i].toLowerCase());
      output.push(caesarEncrypt(str[i], keyIdx));
    } else {
      output.push(str[i]);
    }
  }

  return output.join('');
}

console.log(vigenerteCipher("Pineapples don't go on pizzas!", 'A') === "Pineapples don't go on pizzas!");
console.log(vigenerteCipher("Pineapples don't go on pizzas!", 'Aa') === "Pineapples don't go on pizzas!");
console.log(vigenerteCipher("Pineapples don't go on pizzas!", 'cab') === "Riogaqrlfu dpp't hq oo riabat!");
console.log(vigenerteCipher("Dog", "Rabbit") === "Uoh");
console.log(vigenerteCipher("Pineapples don't go on pizzas!", "meat") === "Bmnxmtpeqw dhz'x gh ar pbldal!");











