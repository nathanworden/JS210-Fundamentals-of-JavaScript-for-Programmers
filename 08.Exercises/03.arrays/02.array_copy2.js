var myArray = [1, 2, 3, 4];
var myOtherArray = myArray.slice();

for (var i = 0; i < myArray.length; i += 1) {
  myOtherArray.push(myArray[i])
}

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);