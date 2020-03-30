function star(lines) {
  let topLines = Math.floor(lines / 2);
  let topPart = '';
  for (let i = 0; i < topLines; i += 1) {
    let line = '';
    let numEdgeSpaces = i;
    let edgeSpaces = ' '.repeat(numEdgeSpaces);
    let numMiddleSpaces = topLines - i - 1;
    let middleSpaces = ' '.repeat(numMiddleSpaces);
    topPart += edgeSpaces + '*' + middleSpaces + '*' + middleSpaces + '*' + edgeSpaces;
    if (i < topLines - 1) {
      topPart += '\n';
    }
  }

  console.log(topPart);
  console.log('*'.repeat(lines));
  console.log(topPart.split('').reverse().join(''));
}


star(7);
console.log('')
star(9);
console.log('')
star(11);
console.log('')
star(13);
console.log('')
star(15);