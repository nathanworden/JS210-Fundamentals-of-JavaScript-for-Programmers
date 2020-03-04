// if the year is between 0 and 100 inclusive it is the first century
// if the year is between 101 and 200 inclusive it is the second century


// function century(year) {
//   var strnum = String(year);
//   var beg = strnum.slice(0, strnum.length - 2);
//   var end = strnum.slice(strnum.length - 2, strnum.length);
//   var title = beg;
//   var last_digit;
//   var tween;
//   var ordInt;
//   if (end !== '00') { title = String(Number(beg) + 1)}

//   const ord = {
//     0: 'th', 1: 'st', 2: 'nd', 3: 'rd', 4: 'th', 5: 'th', 
//     6: 'th', 7: 'th', 8: 'th', 9: 'th', 11: 'th', 12: 'th',
//     13: 'th'
//   }

//   last_digit = title[title.length - 1]

//   tween = title.slice(title.length - 2, title.length);
//   if (tween === '11' || tween === '12' || tween === '13')  {
//     ordInt = ord[tween];
//   } else {
//     ordInt = ord[last_digit];
//   }



//   return  title + ordInt;
// }


// console.log(century(2000) === "20th");
// console.log(century(2001) === "21st");
// console.log(century(1965) === "20th");
// console.log(century(256)      === "3rd");
// console.log(century(5)        === "1st");
// console.log(century(10103)    === "102nd");
// console.log(century(1052)     === "11th");
// console.log(century(1127)     === "12th");
// console.log(century(11201)    === "113th");



function century(year) {
  var title = String(Math.floor(year / 100) + 1);
  if (year % 100 === 0) {title = String(Number(title -= 1))}
  var last_digit;
  var tween;
  var ordInt;

  const ord = {
    0: 'th', 1: 'st', 2: 'nd', 3: 'rd', 4: 'th', 5: 'th', 
    6: 'th', 7: 'th', 8: 'th', 9: 'th', 11: 'th', 12: 'th',
    13: 'th'
  }

  last_digit = title[title.length - 1]

  tween = title.slice(title.length - 2, title.length);
  if (tween === '11' || tween === '12' || tween === '13')  {
    ordInt = ord[tween];
  } else {
    ordInt = ord[last_digit];
  }

  return  title + ordInt;
}



console.log(century(2000) === "20th");
console.log(century(2001) === "21st");
console.log(century(1965) === "20th");
console.log(century(256)      === "3rd");
console.log(century(5)        === "1st");
console.log(century(10103)    === "102nd");
console.log(century(1052)     === "11th");
console.log(century(1127)     === "12th");
console.log(century(11201)    === "113th");