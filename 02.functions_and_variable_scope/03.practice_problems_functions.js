function average(arr) {
  return sum(arr) / arr.length;
}


function sum(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i += 1) {
    total += arr[i]
  }
  return total
}


console.log(average([2, 3, 4, 5, 6]));


var temperatures = [5, 6, 7, 8, 9]

console.log(average(temperatures));