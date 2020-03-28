// Problem
// Given an array of n booleans. all false
// Iterate through them n times.
// Each iteration toggle all booleans that are multiples of the current n.
// Return the index of the booleans that are true.


// Array


function lightsOn(switches) {
  let arr = new Array(switches);
  arr.fill(false, 0, switches);

  for (let i = 1; i <= switches; i += 1) {
    arr = arr.map((light, idx) => {
      if ((idx + 1) % i === 0) {
        return !light;
      } else {
        return light;
      }
    });

  }
  arr = arr.map((light, idx) => {
    if (light) {
      return idx + 1;
    }
  });

  return arr.filter(light => light);
}

console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]