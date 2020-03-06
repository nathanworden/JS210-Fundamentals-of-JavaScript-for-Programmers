// function objectHasProperty(obj, str) {
//   return Object.keys(obj).includes(str)
// }

// var pets = {
//   cat: 'Simon',
//   dog: 'Dwarf',
//   mice: null,
// };


// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true


//////////////////////////////////////////////////////////////////////////////


// function incrementProperty(obj, str) {
//   if (Object.keys(obj).includes(str)) {
//     obj[str] += 1;
//   } else {
//     obj[str] = 1
//   }

//   return obj[str]
// }


// var wins = {
//   steve: 3,
//   susie: 4,
// };

// console.log(incrementProperty(wins, 'susie'));   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// console.log(incrementProperty(wins, 'lucy'));    // 1
// console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }


//////////////////////////////////////////////////////////////////////////////


// function copyProperties(obj1, obj2) {
//   var props = 0;
//   for (var prop in obj1) {
//     obj2[prop] = obj1[prop];
//     props += 1
//   }

//   return props;
// }

// var hal = {
//   model: 9000,
//   enabled: true,
// };

// var sal = {};
// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }



//////////////////////////////////////////////////////////////////////////////


function wordCount(str) {
  var output = {};
  var arr = str.split(' ');

  for (var i = 0; i < arr.length; i += 1) {
    if (output[arr[i]]) {
      output[arr[i]] += 1;
    } else {
      output[arr[i]] = 1;
    }
  }

  return output;
}



console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }


























