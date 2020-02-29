function averageScores() {
  var scores = 0

  var numScores = Number(prompt("How many scores do you have to enter?"));

  for (var i = 1; i <= numScores; i += 1) {
    var currentScore = prompt(`Enter score ${i} `)
    scores += Number(currentScore)
  }

  var average = scores / numScores;

  var grade
  if (average >= 90) {
    grade = `A. You got ${average} percent`;
  } else if (average >= 70) {
    grade = `B You got ${average} percent`;
  } else if (average >= 50) {
    grade = `C You got ${average} percent`;
    } else {
      console.log('F');
  }

  console.log(`Based on the average of your 3 scores your letter grade is ${grade}`);
}

averageScores();