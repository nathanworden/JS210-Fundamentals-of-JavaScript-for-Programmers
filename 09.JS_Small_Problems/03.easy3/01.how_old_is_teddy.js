function randomBetween(max, min) {
  if (min > max) {
    var temp = min;
    min = max;
    max = temp;
  }
  return Math.round(Math.random() * (max - min + 1)) + min;
}

var age = randomBetween(200, 20);
console.log('Teddy is ' + age + ' years old!');
