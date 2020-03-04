function getGrade(num1, num2, num3) {
  var average = (num1 + num2 + num3) / 3

  if (average >= 90) {return 'A'}
  if (average >= 80) {return 'B'}
  if (average >= 70) {return 'C'}
  if (average >= 60) {return 'D'}
  if (average < 60) {return 'F'}
}


console.log(getGrade(95, 90, 93) === "A");
console.log(getGrade(50, 50, 95) === "D");