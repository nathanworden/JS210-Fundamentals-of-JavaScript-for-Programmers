function multiplesOfThreeAndFive(min, max) {
  for (var i = min; i <= max; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(String(i) + "!");
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(String(i));
    }
  }
}

multiplesOfThreeAndFive();