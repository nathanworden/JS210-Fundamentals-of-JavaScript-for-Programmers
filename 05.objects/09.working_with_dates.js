var today = new Date();
// // // console.log(today);

// var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thursday', 'Fri', 'Sat'];
// var months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// var month = months[today.getMonth()]
// var dayIdx = today.getDay();
// var date = today.getDate();


// function dateSuffix(dayOfMonth) {
//   var suffixs = ['th', 'st', 'nd', 'rd', 'th'];
//   var tweens = [11, 12, 13];

//   if (tweens.includes(dayOfMonth)) {
//     return 'th'
//   } else if (dayOfMonth % 10 < 4) {
//     return suffixs[dayOfMonth % 10]
//   } else {
//     return 'th'
//   }
// }


// console.log("Today's date is " + daysOfWeek[dayIdx] + " " + month + " the " + date + dateSuffix(date))



///////////////////////////////////////////////////////////////////////

// var today = new Date();

function formattedDate(date) {
  var day = formattedDay(date);
  var month = formattedMonth(date);

  console.log("Today's date is " + day + ', ' + month + ' ' + dateSuffix(date.getDate()));
}

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

function dateSuffix(date) {
  var suffixs = ['th', 'st', 'nd', 'rd', 'th'];
  var suffix = 'th';
  var tweens = [11, 12, 13];

  if (tweens.includes(date)) {
    suffix =  'th'
  } else if (date % 10 < 4) {
    suffix =  suffixs[date % 10]
  } else {
    suffix =  'th'
  }

  return String(date) + suffix;
}

// formattedDate(today);

///////////////////////////////////////////////////////////////////////

var tomorrow = new Date(today.getTime());

tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);

// var tomorrow = today.getTime().setDate();

// console.log(formattedDate(tomorrow));


///////////////////////////////////////////////////////////////////////


var nextWeek = new Date(today.getTime());
console.log(nextWeek);

console.log(today);


console.log(today.toDateString() === nextWeek.toDateString());
nextWeek.setDate(today.getDate() + 7);
console.log(today.toDateString() === nextWeek.toDateString());

function formatTime(date) {
  return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

function addZero(value) {
  var timeComponent = String(value);
  return timeComponent.length < 2 ? '0' + timeComponent : timeComponent;
}

console.log(formatTime(new Date(2013, 2, 1, 1, 10)));



























