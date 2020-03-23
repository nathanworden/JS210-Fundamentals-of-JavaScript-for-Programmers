// function buyFruit(arr) {
//   let output = [];
//   arr.forEach(subArr => {
//     for (let i = 0; i < subArr[1]; i += 1) {
//       output.push(subArr[0])
//     }
//   });

//   return output;
// }

const buyFruit = (array) => (
  array.flatMap((element) => new Array(element[1]).fill(element[0]))
  );

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));