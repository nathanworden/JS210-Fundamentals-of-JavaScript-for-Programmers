// There are 60 minutes in a degree, and 60 seconds in a minute.
var DEGREE = '\xB0';
var MINUTES_PER_DEGREE = 60;
var SECONDS_PER_MINUTE = 60;
var SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(flt) {
  if (flt < 0) {
    while (Math.abs(flt) > 360) {
      flt = 360 - Math.abs(flt);
    }
    flt = 360 - Math.abs(flt);
  } else if (flt > 360) {
      while (flt > 360) {
        flt = flt - 360;
    }
  }
  var decimals = (flt - Math.floor(flt));
  var degrees = flt - decimals;
  var deci = decimals * MINUTES_PER_DEGREE;
  var minutes = Math.floor(deci);
  var dec = deci - minutes;
  var seconds = Math.round(dec * 60);

  degrees = padZeroes(degrees);
  minutes = padZeroes(minutes);
  seconds = padZeroes(seconds);
  return `${degrees}˚${minutes}'${seconds}''`;
}

function padZeroes(num) {
  if (num < 10) {
    return '0' + String(num);
  } else {
    return num
  }
}


// console.log(dms(30));           // 30°00'00"
// console.log(dms(76.73));        // 76°43'48"
// console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00"


// Further Exploration

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"