function minilang(str) {
  let stack = [];
  let register = 0;

  let instructions = str.split(' ');
  instructions.forEach(ele => {
    if (register === undefined) {console.log('Error. Register is undefined.')}

    if (ele[0].match(/[A-Za-z]/)) {
      switch (ele) {
        case 'PUSH':
          stack.push(register);
          break;
        case 'ADD':
          register += stack.pop();
          break;
        case 'SUB':
          register -= stack.pop();
          break;
        case 'MULT':
          register *= stack.pop();
          break;
        case 'DIV':
          register = Math.floor(register / stack.pop());
          break;
        case 'MOD':
          register %= stack.pop();
          break;
        case 'POP':
          register = stack.pop();
          break;
        case 'PRINT':
          console.log(register);
          break;
        default:
          console.log('invalid token')
      }
    } else {
      register = Number(ele);
    }
  });

}

minilang('dog apple 5 invalid');

// minilang('5 POP POP PRINT')
// // error

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)




