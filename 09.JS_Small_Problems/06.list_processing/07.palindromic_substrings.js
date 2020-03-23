function palindromes(str) {
  return substrings(str).filter(subString => {
    if (subString.length <= 1) {return false}
    return subString === [...subString].reverse().join('');
  })
}


function substrings(str) {
  let output = [];
  for (let i = 0; i < str.length; i += 1) {
    output.push(substringsAtStart(str.slice(i)));
  }
  return output.flat();
}

function substringsAtStart(str) {
  return [...str].map((_, idx) => str.slice(0, idx + 1));
}




///

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
[ "ll", "-madam-", 
"-madam-did-madam-", "madam", 
"madam-did-madam",  "ada",
"adam-did-mada",    "dam-did-mad", 
"am-did-ma",        "m-did-m", 
"-did-",            "did",
"-madam-",           "madam", 
"ada",              "oo" ]

console.log(palindromes('knitting cassettes'));
// // returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]