var doubler = makeDoubler('Victor');
console.log(doubler(5));  


function makeDoubler(caller) {
  return function (num) {
    console.log(`This function was called by ${caller}.`);
    return num * 2;
  };
}