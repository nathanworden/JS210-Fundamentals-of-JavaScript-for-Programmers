// function letterCaseCount(str) {
//   output = {};
//   let matches = str.match(/[a-z]/g);
//   if (matches === null) {
//     output['lowercase'] = 0;
//   } else { output['lowercase'] = matches.length }
//   matches = str.match(/[A-Z]/g);
//   if (matches === null) {
//     output['uppercase'] = 0;
//   } else { output['uppercase'] = matches.length }
//   matches = str.match(/[\W\d]/g);
//   if (matches === null) {
//     output['neither'] = 0;
//   } else { output['neither'] = matches.length }
//   return output;
// }

function letterCaseCount(str) {
  output = {};
  let lower = str.match(/[a-z]/g) || [];
  let upper = str.match(/[A-Z]/g) || [];
  let neither = str.match(/[\W\d]/g) || [];
  output['lowercase'] = lower.length;
  output['uppercase'] = upper.length;
  output['neither'] = neither.length;
  return output;
}


console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }