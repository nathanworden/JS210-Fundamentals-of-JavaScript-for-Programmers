// function oddElementsOf(arr) {
//   var newarr = [];
//   for (var i = 0; i < arr.length; i += 1) {
//     if (i % 2 !== 0) {
//       newarr.push(arr[i])
//     }
//   }

//   return newarr;
// }


// var digits = [4, 8, 15, 16, 23, 42];

// console.log(oddElementsOf(digits));    // returns [8, 16, 42]

// function combinedArray(even, odd) {
//   var arr = []
//   for (var i = 0; i < even.length; i += 1) {  
//     arr.push(even[i])
//     arr.push(odd[i])
//   }

//   return arr;
// }


// var digits = [4, 8, 15, 16, 23, 42];
// var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

// console.log(combinedArray(digits, letters));  // returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"



// function reverseArr(arr) {
//   var output = arr;
//   var rev = output.slice().reverse();
//   return output.concat(rev);
// }


// var one = [1, 2, 3]

// console.log(reverseArr(one));




// function sortDescending(arr) {
//   var newarr = arr.slice();
//   return newarr.sort(function(a, b) {return b - a;});
// }


// var array = [23, 4, 16, 42, 8, 15];
// var result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]



// function matrixSums(arr) {
//   return arr.map((ele) => ele.reduce((acc, ele) => acc + ele, 0))
// }



// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]



function uniqueElements(arr) {
  var output = [];

  for (var i = 0; i < arr.length; i += 1) {
    if (!output.includes(arr[i]))
    output.push(arr[i])
  }

  return output;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5])






























