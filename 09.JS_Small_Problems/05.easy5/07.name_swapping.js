function swapName(name) {
  var arr = name.split(' ');
  var lastName = arr[arr.length - 1];
  var firstName = arr.slice(0, arr.length - 1);
  firstName = firstName.join(' ');

  return `${lastName}, ${firstName}`
}

console.log(swapName('Mary Jean Roberts'));    // "Roberts, Joe")
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"