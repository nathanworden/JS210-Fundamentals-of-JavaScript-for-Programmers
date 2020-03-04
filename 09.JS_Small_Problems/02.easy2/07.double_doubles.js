// function twice(num) {
//   var strnum = String(num);
//   var half;
//   var halvse;
//   var double_num;
//   if (strnum.length % 2 === 1) {
//     return num * 2;
//   } 

//   half = Math.floor(strnum.length / 2);
//   halves = strnum.slice(0, half);
//   double_num = Number(halves.repeat(2)) === num;
//   if (double_num) {
//     return num;
//   } else {
//     return num * 2;
//   }
// }


console.log(twice(37)  ===          74);
console.log(twice(44) ===          44);
console.log(twice(334433) ===  668866);
console.log(twice(444) ===        888);
console.log(twice(107) ===        214);
console.log(twice(103103) ===  103103);
console.log(twice(3333) ===      3333);
console.log(twice(7676) ===      7676);



// lewis reynolds solution

// function isDubNumb(num) {
//   num = String(num);
//   if (num.length % 2 === 1) {return false};
//   var len = num.length / 2;
//   return num.slice(0, len) === num.slice(len)
// }

// function twice(num) {
//   return isDubNumb(num) ? num : num * 2;
// }