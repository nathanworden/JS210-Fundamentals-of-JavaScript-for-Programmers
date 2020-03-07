var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};
console.log(person.firstName + ' ' + person.lastName;
// function () {
//     return 'Victor';
//   } function () {
//     return 'Reyes';
//   }


console.log(person.firstName() + ' ' + person.lastName());
// 'Victor Reyes'