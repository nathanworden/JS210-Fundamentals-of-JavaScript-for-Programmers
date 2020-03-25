function staggeredCase(str) {
  let chars = str.split('');
  let idx = 0;
  return chars.map((letter) => {
    if (idx % 2 == 0 ) {
      if ((/[a-zA-Z]/.test(letter))) {idx += 1}
      return letter.toUpperCase();
    } else {
      if ((/[a-zA-Z]/.test(letter))) {idx += 1}
      return letter.toLowerCase();
    }
  }).join('');
}


console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"