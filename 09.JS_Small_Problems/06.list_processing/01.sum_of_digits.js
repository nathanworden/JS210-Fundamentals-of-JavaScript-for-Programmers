function sum(integer) {
  let numArr = String(integer).split('').map(num => Number(num));
  return numArr.reduce((acc, num) => acc + num);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
