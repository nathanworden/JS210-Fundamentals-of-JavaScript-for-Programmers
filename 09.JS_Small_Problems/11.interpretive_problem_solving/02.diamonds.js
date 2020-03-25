// Problem
// Given an odd integer, n, create an n by n grid of stars in a diamond shape.
// input: an odd integer
// output: a diamond shape.

//Rules: 
// There will be n lines in the diamond
// The middle line will be n stars long
// The stars are centered in their row
// Each row has two more stars than the previous row until the middle
  // Then each row has two less stars.

// Each line has n spots.
// Each line is (spaces + stars + spaces)

// Getting the star count:
    // n times, starting with 1, add 2 each time until the line has n stars,
    // then subtract 2 each time until n has 1 star
// Getting the spaces count:
    // n minus the star count divided by 2


// function diamond(num) {
//   let stars = '*';
//   let starRows = [];
//   for (let i = 1; i <= num; i += 2) {
//     starRows.push(stars);
//     stars = stars + "**";
//   }

//   let secondHalfStars = starRows.slice(0, starRows.length - 1).reverse();

//   secondHalfStars.forEach(starLine => starRows.push(starLine));

//   let outputArr = starRows.map(starLine => {
//     let numSpaces = (num - starLine.length) / 2;
//     let spaces = '';

//     for (let i = 0; i < numSpaces; i += 1) {
//       spaces = spaces + ' ';
//     }

//     return spaces + starLine + spaces
//   });

//   outputArr.forEach(starLine => {
//     console.log(starLine);
//   })
// }

// diamond(1);
// console.log(' ')
// diamond(3);
// console.log(' ')
// diamond(9);




////////





function diamond(num) {
  let stars = '*';
  let starRows = [];
  for (let i = 1; i <= num; i += 2) {
    starRows.push(stars);
    stars = stars + "**";
  }

  let secondHalfStars = starRows.slice(0, starRows.length - 1).reverse();

  secondHalfStars.forEach(starLine => starRows.push(starLine));

  let addCount = 0;
  let hallows = starRows.map((row, idx) => {
    if (row.length > 1) {
      let arrRow = row.split('')
      let insertSpaces = ' '.repeat(row.length - 2)
      arrRow.splice(1, row.length - 2, insertSpaces);
      row = arrRow.join('');
    }

    return row;
  })

  let outputArr = hallows.map(starLine => {
    let numSpaces = (num - starLine.length) / 2;
    let spaces = '';

    for (let i = 0; i < numSpaces; i += 1) {
      spaces = spaces + ' ';
    }

    return spaces + starLine + spaces
  });

  outputArr.forEach(starLine => {
    console.log(starLine);
  })
}

diamond(1);
console.log(' ');
diamond(3);
console.log(' ');
diamond(9);
console.log(' ');
diamond(21);








