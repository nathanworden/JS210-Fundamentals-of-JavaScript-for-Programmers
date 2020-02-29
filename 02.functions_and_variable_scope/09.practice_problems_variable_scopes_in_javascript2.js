// function say() {
//   if (false) {
//     var a = 'hello from inside a block';
//   }

//   console.log(a);
// }

// say();

// function hello() {
//   var a
//   a = 'hello';
//   console.log(a);

//   if (false) {
//     var a = 'hello again';
//   }
// }

// hello();
// console.log(a);


//  'hello'
//  error


// var a = 'hello';

// for (var i = 0; i < 5; i += 1) {
//   var a = i;
// }

// console.log(a);


 //  4


//////////////////////////////

// var a = 1;

// function foo() {
//   a = 2;
//   function bar() {
//     a = 3;
//     return 4;
//   }



//   return bar();
// }


// console.log(foo());  // 4
// console.log(a); // 2




// var a

// function checkScope() {

//   function nested() {
    
//     function superNested() {
//       a = 'superNested';
//       return a;
//     }

//     var a = 'nested';

//     return superNested();
//   }

//   var a = 'local';

//   return nested();
// }

// a = 'global'

// console.log(checkScope()); // 'superNested'
// console.log(a); // global





//////////////


// function setScope(foo) {
//   foo = 'inner';
//   b = 'inner';
// }

// var a;
// var b;

// var a = 'outer'
// var b = 'outer'

// console.log(a);  // outer
// console.log(b);  // outer
// setScope(a);     // 
// console.log(a);  //  outer
// console.log(b);  // inner




//////////////

// var total = 50;
// var increment = 15;

// function incrementBy(increment) {
//   total += increment;
// }

// console.log(total)      // 50
// incrementBy(10);        // 
// console.log(total)      // 60
// console.log(increment); // 15



//////////////

var a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};


// outer
// error
















































