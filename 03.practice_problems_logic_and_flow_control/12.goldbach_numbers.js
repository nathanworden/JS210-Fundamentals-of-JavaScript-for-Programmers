// Find all prime numbers from 0 to input num
// loop through these numbers
// subtract the current number from the input number
// check if the result is also in the array.
// if it is, log those two numbers

// function checkGoldbach(num) {
//   if (num % 2 === 1) {
//     console.log(null)
//   }

//   var primes = [];

//   for (var i = 0; i < num; i += 1) {
//     if (isPrime(i)) {
//       primes.push(i);
//     }
//   }

//   var prmbud = primes.length
//   for (var i = 0; i < prmbud; i += 1) {
//     var prmbud = num - primes[i]

//     if (primes.includes(prmbud)) {
//       console.log(`${primes[i]}, ${prmbud}`);
//       var idx = primes.findIndex(ele => ele === prmbud);
//       primes[idx] = null;
//     } 
//   }
// }



// function isPrime(num) {
//   var prime = num === 1 || num === 0 ? false : true;

//   for (var i = num - 1; i > 1; i -= 1) {
//     if (num % i === 0) {
//       prime = false;
//     }
//   }
//   return prime;
// }


/////////////////////////////////////////////////

function checkGoldbach(n) {
  var num1 = 1;
  var num2;

  if (n < 4 || n % 2 === 1) {
    console.log(null);
    return;
  }

  do {
    num1 += 1;
    num2 = n - num1;
    if (isPrime(num1) && isPrime(num2)) {
      console.log(num1, num2);
    }

  } while (num1 !== num2);
}

function isPrime(num) {
  var prime = num === 1 || num === 0 ? false : true;

  for (var i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      prime = false;
    }
  }
  return prime;
}


console.log(checkGoldbach(3));
// logs: null

console.log(checkGoldbach(4));
// logs: 2 2

console.log(checkGoldbach(12));
// logs: 5 7

console.log(checkGoldbach(100));
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53



