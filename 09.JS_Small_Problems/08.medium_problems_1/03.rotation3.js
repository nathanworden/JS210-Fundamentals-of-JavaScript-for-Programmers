function maxRotation(num) {
  let numLen = String(num).length;
  for (let i = numLen; i > 1; i -= 1) {
    num = rotateRightmostDigits(num, i);
  }

  return Number(num);
}

function rotateArray(arr) {
  if (!Array.isArray(arr)) {return undefined}
  if (arr.length === 0) {return []}
  let output = [];
  for (let i = 1; i < arr.length; i += 1) {
    output.push(arr[i]);
  }

  output.push(arr[0]);
  return output;
}

function rotateRightmostDigits(number, n) {
  let strNum = String(number);
  let front = strNum.slice(0, -Math.abs(n));
  let back = strNum.slice(-Math.abs(n), strNum.length);
  let backRotate = rotateArray([...back]).join('');
  return front + backRotate;
}

console.log(maxRotation(735291)     ===  321579);
console.log(maxRotation(3)          ===  3);
console.log(maxRotation(35)         ===  53);
console.log(maxRotation(105)       ===  15 ); //-- the leading zero gets dropped
console.log(maxRotation(8703529146)  ===  7321609845);