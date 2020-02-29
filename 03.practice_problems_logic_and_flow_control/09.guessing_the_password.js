function password() {
  var password = 'password';
  var input;

  for (var i = 0; i < 3; i += 1){
    input = prompt('What is the password: ');
    if (input === password) {
      console.log('You have successfully logged in');
      break
    }
  }
  console.log('You have been denied access');
}

password();

