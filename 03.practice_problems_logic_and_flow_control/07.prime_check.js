// function isPrime(num) {
//   if (num % 2 == 0) return false;
//   if (num === 2) return true;

//   var is_prime = true;
//   var divisor = num;
  
//   while (divisor > 0) {
//     if (num % divisor === 0) {
//       is_prime = false;
//     }

//     divisor -= 2;
//   }

//   is_prime;
// 


// A prime number is a numer that is only divisble by 1 and itself
// Loop through all numbers smaller than the given number.
// If the main number modulo the current number is 0,
// Return false
// otherwise, return true

function isPrime(num) {
  var prime = num === 1 || num === 0 ? false : true;

  for (var i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      prime = false;
    }
  }
  return prime;
}



console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false