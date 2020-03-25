// function searchWord(word, text) {
//   let idxExists = text.indexOf(word)
//   let count = 0;
//     while (idxExists >= 0) {
//       idxExists = text.indexOf(word)
//       if (idxExists < 0) {break}
//       text = text.slice(idxExists + word.length);
//       count += 1;
//     }

//   return `count: ${count}`;
// }

function searchWord(word, text) {
  var regex = new RegExp(`\\b${word}\\b`, 'gi');
  var matches = text.match(regex);

  return matches ? matches.length : 0;
}

var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3

console.log(searchWord('qui', text));      // should return 4, NOT 13

var other = "aaa a aa a aaa a a";
console.log(searchWord('a', other));
//4