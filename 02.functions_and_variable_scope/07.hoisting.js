// bar();
// var bar = 'hello';

// function bar() {
//   console.log('world');
// }


///////////////////////////
var bar = 'hello';
bar();

function bar() {
  console.log('world');
}

///////////////////////////

//Best Practice to Avoid Confusion!
// 1) Always decalre variables at the top of their scope:
function foo() {
  var a = 1;
  var b = 'hello';
  var c;
}


// 2) Always declare functions before calling them:

function foo() {
  return 'hello';
}

foo();