// Problem:
// Write a function that takes an integer as an argument and returns the next featured number greater than the integer.
// Issue an error message if there is no next featured number

// input: number
// output: A number that is:
    // odd
    // multiple of 7
    // has unique digits

// Add one to the number
  // check if it is:
      // odd
      // multiple of 7
      // has unique digits
  // If true, return that number
  // if false, add one and continue

function featured(num) {
  let MAX_FEATURED = 9876543201;
  num += 1;
  do {
    if (odd(num) && multipleOf7(num) && unique(num)) {break}
    if (num > MAX_FEATURED) { return 'There is no possible number that fulfills those requirements.'}

    num += 1;
  } while (true)

  return num;
}

function odd(num) {
  return num % 2 !== 0;
}

function multipleOf7(num) {
  return num % 7 === 0;
}

function unique(num) {
  let arr = String(num).split('');
  let distinct = [...new Set(arr)];
  return arr.length === distinct.length;
}


console.log(featured(12)          === 21);
console.log(featured(20)          === 21);
console.log(featured(21)          === 35);
console.log(featured(997)         === 1029);
console.log(featured(1029)        === 1043);
console.log(featured(999999)      === 1023547);
console.log(featured(999999987)   === 1023456987);


