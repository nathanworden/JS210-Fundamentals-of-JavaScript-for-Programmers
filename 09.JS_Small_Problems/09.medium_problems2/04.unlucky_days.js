//
// Given a year, find out what day of the week January 1st was.
// Increment the day 365 times (or 366 times)
// Increment the day until December 31st of that year
// COunt the number of Fridays that are also the 13th


function fridayThe13ths(year) {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  let currentDate = new Date(`Jan 1, ${year}`);
  let friday13s = [];
  while (currentDate.getDay() !== 31 && currentDate.getMonth() !== 11) {
    if (currentDate.getDay() === 5 && currentDate.getDate() === 13) {
      friday13s.push(currentDate.toDateString());
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return friday13s.length;
}

// Book Answer

// function fridayThe13ths(year) {
//   let thirteenths = [];
//   for (let i = 0; i < 12; i += 1) {
//     thirteenths.push(new Date(year, i, 13));
//   }

//   return thirteenths.reduce(function (count, day) {
//     return day.getDay() === 5 ? (count + 1) : count;
//   }, 0);
// }


console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
console.log(fridayThe13ths(2020));      // 2