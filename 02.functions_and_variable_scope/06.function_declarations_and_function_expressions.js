// function hello() {
//   return 'hello world!';
// }

// console.log(typeof hello);


//////////////////////////////////////////////

// function outer() {
//   function hello() {
//     return 'hello world';
//   }

//   return hello();
// }

// // console.log(typeof hello)

// var foo = outer;
// console.log(foo());


//////////////////////////////////////////////

// var stringVar = 'string reference';
// var numberVar = 42;

// function functionVar() {
//   return 'function reference';
// }

// console.log(typeof stringVar);
// console.log(typeof numberVar);
// console.log(typeof functionVar);

// stringVar = functionVar;
// functionVar = 'string reference'

// console.log(typeof stringVar);
// console.log(typeof functionVar);

//////////////////////////////////////////////


// var hello = function () {
//   return 'hello';
// };

// console.log(typeof hello);
// console.log(hello());


//////////////////////////////////////////////

// var foo = function () {
//   return function () {
//     return 1;
//   };
// };

// var bar = foo();
// console.log(bar());


////////////////////////////////////////////

// var hello = function foo() {
//   console.log(typeof foo);
// };

// hello();

// foo();

////////////////////////////////////////////


// function foo() {
//   console.log('function declaration');
// }

// (function bar() {
//   console.log('function expression');
// })


// foo();


////////////////////////////////////////////


var foo = function foo() {
  return 'a named function expression assigned to a variable';
};

function bar() {
  return 'a function declaration';
}


console.log(foo);

console.log(bar());
























