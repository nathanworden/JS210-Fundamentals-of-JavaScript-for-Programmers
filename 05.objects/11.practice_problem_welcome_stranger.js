function greetings(arr, obj) {
  var name = arr.join(' ');

  console.log(`Hello, ${name}! Nice to have a ${obj['title']} ${obj['occupation']} around.`)
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });
