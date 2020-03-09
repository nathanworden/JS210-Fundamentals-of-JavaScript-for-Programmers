var number = ['1st', '2nd', '3rd', '4th', '5th'];
var special;
var nums = [];
var num;
var numbers;

for (var i = 0; i < number.length; i += 1) {
  num = prompt(`Enter the ${number[i]} number: `);
  nums.push(num);
}

// special = prompt("Enter the last number.");

// if (nums.includes(special)) {
//   console.log(`The number ${special} appears in ${nums}`)
// } else {
//   console.log(`The number ${special} does not apepar in ${nums}`)
// }

numbers = String(nums.filter(ele => ele > 25).join(', '));
console.log(`${numbers} are greater than 25`)