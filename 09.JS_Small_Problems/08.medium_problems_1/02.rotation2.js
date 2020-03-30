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

// split apart the furst part of the number with the second part,
// leaving n characters.
    // Turn the number into a string and slice it

function rotateRightmostDigits(number, n) {
  let strNum = String(number);
  let front = strNum.slice(0, -Math.abs(n));
  let back = strNum.slice(-Math.abs(n), strNum.length);
  let backRotate = rotateArray([...back]).join('');
  return Number(front + backRotate);
}


console.log(rotateRightmostDigits(735291, 1) ===  735291);
console.log(rotateRightmostDigits(735291, 2) ===  735219);
console.log(rotateRightmostDigits(735291, 3) ===  735912);
console.log(rotateRightmostDigits(735291, 4) ===  732915);
console.log(rotateRightmostDigits(735291, 5) ===  752913);
console.log(rotateRightmostDigits(735291, 6) ===  352917);