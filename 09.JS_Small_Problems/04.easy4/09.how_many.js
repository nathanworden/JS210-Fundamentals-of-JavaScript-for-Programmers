function countOccurrences(arr) {
  output = {};
  for (var i = 0; i < arr.length; i += 1) {
    if (output[arr[i]]) {
      output[arr[i]] += 1;
    } else {
      output[arr[i]] = 1;
    }
  }

  var keys = Object.keys(output);

  for (var i = 0; i < keys.length; i += 1) {
    console.log(`${keys[i]} => ${output[keys[i]]}`)
  }
}


var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);