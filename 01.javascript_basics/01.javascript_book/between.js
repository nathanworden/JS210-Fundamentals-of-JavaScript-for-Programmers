function numberRange(num) {
  switch (num) {
  case num >= 0 && num <= 50:
    console.log(`${num} is betewen 0 and 50`);
    break;
  case num > 50 && num <= 100:
    console.log(`${num} is between 51 and 100`);
    break;
  case num > 100:
    console.log(`${num} is greater than 100`);
    break;
  case num < 0:
    console.log(`${num} is less than 0`);
    break;
  default:
    console.log('this is broken');
    break;
  }
}


numberRange(25);   // '25 is between 0 and 50'
numberRange(75);   // '75 is between 51 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'