// function isEmpty(value) {
//   var type = typeof value;
//   if (Array.isArray(value)) {
//     var output = true;
//     for (var element in value) {
//       if (value.hasOwnProperty(element)) {
//         output = false;
//       }
//     }
//     return output;
//   } else if (type === 'string') {
//     return value.length === 0;
//   } else if (type === 'object') {
//     return Object.keys(value).length === 0;
//   }
// }


function isEmpty(value) {
  var type = typeof value;
  if (type === 'string') {
    return value.length === 0;
  } else if (Array.isArray(value)) {
    return value.length === 0;
  } else if (type === 'object') {
    return Object.keys(value).length === 0;
  }
}

// function isEmpty(value) {
//   var type = typeof value;
//   if (type === 'string') {
//     return value.length === 0;
//   } else if (type === 'object') {
//     return Object.keys(value).length === 0;
//   }
// }

//new test cases
// console.log(isEmpty([]) ===                   true);
// console.log(isEmpty([undefined]) ===         false);
// console.log(isEmpty([null]) ===              false);
var arr = []
arr.length = 4;
console.log(isEmpty(arr));
console.log(arr);

var arr2 = []
arr2[-1] = 'hello';
console.log(isEmpty(arr2));
console.log(arr2)

var arr3 = new Array(2);
console.log(isEmpty(arr3));
console.log(arr3)



// // current test cases
// console.log(isEmpty({}) ===                  true);
// console.log(isEmpty({ name: 'Janice' }) ===  false);

// console.log(isEmpty('') ===                  true);
// console.log(isEmpty('Janice') ===            false);

// console.log(isEmpty([]) ===                  true);
// console.log(isEmpty(['Janice']) ===          false);










