// Find all the denominators of the 1st integer
// Find all the denominators of the 2nd integer
// Filter for the ones that match
// Take the largest one.


// function gcd(num1, num2) {
//   var divs1
//   var divs2
//   var intersection
//   var maximum

//   function divisors(num) {
//     var arr1 = []

//     for (var i = num; i > 0; i -= 1) {
//       if (num % i == 0) {
//         arr1.push(i);
//       }
//     }
//     return arr1
//   }

//   divs1 = divisors(num1);
//   divs2 = divisors(num2);

//   intersection = divs1.filter(ele => divs2.includes(ele));
//   maximum = Math.max(...intersection)

//   console.log(`${maximum}`);
// }

// gcd(12, 4);   // 4
// gcd(15, 10);  // 5
// gcd(9, 2);    // 1


/////////////////////////////////////////////

// Euclid's algorithm
// function gcd(num1, num2) {
//   var arr = [num1, num2];
//   var sorted = arr.sort();
//   var biggerNum = sorted[0];
//   var smallerNum = sorted[1];
//   var remainder = biggerNum

//   while (remainder > 0) {
//     var quo = Math.floor(biggerNum / smallerNum)
//     remainder = biggerNum % smallerNum
//     biggerNum = smallerNum
//     smallerNum = remainder
//   }

//   return biggerNum
// }

// console.log(gcd(4, 12));   // 4
// console.log(gcd(10, 15));  // 5
// console.log(gcd(9, 2));    // 1
// console.log(gcd(48, 18)); // 6
// console.log(gcd(73, 11)); // 1


/////////////////////////////////////////////
// Book answer:
// function gcd(num1, num2) {
//   var temp;

//   while (num2 !== 0) {
//     temp = num2;
//     num2 = num1 % num2;
//     num1 = temp;
//   }

//   return num1;
// }

// console.log(gcd(4, 12));   // 4
// console.log(gcd(10, 15));  // 5
// console.log(gcd(9, 2));    // 1
// console.log(gcd(48, 18)); // 6
// console.log(gcd(73, 11)); // 1


/////////////////////////////////////////////


function multipleGcd(arr) {
  arr.reduce ((acc, ele) => )
}

function gcd(num1, num2) {
  var temp;

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
}





















