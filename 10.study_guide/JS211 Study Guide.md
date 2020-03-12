[toc]

You should be able to explain clearly the following topics:

### Primitive values, types and type conversions

JavaScript has five so-called **primitive data types**:

- String - a list of characters in a specific sequence.
- Number - represents all types of numbers (floats, fix-point, etc.)
- Undefined - represences the absence of a value.
- Null - represents the intentional absence of a value. Often used to represent emptiness or  'nothing'.
- Boolean - represents an 'on' or 'off' state. `true` and `false`

JavaScript primitives are immutable. You cannot change them once you create them.

#### Type Conversions

Explicit Coercion lets you decide what kind of coercion you want, whereas implicit coercion lets the engine decide.

Implicit Type Coercion:

```javascript
'1' + 2
= '12'
```

First, JavaScript coerces the number 2 into a string: '2'. Then it concatenates the result to the string '1'.

Explicit Type Conversion:

```javasc
String(123)
// '123'
```

You *could* use the plus operator to convert a number to a string, but this does not make its intent clear so you should avoid using code like this:

```javasc
123 + '';
// "123"
```

More on Explicit Primitive Type Coercions:

https://launchschool.com/lessons/7377ece4/assignments/3899592c

Implicit Primitive Type Coercions

### Variable scopes

A variable's **scope** determines where it is available in a program. The location where you declare a variable determines its scope. In JavaScript, variables declared with the `let` or `const` keywords have **block** scope. A block is a related set of JavaScript statements and expressions between a pair of opening and closing curly braces. We'll use an `if` statement to illustrate since they typically use at least one block:

```js
if (expression) {  // block starts at {
  doSomething();   // block body
}                  // block ends here
```

In the next example, the condition always evaluates as true, so JavaScript runs the `let` statement on line 2. That code declares a variable `a` and assigns it to the string `'foo'`. However, we get an error on line 5 since `let` creates a block-scoped variable; `a` isn't accessible outside the block.

```js
if (1 === 1) {
  let a = 'foo'
}

console.log(a); // ReferenceError: a is not defined
```

The error tells you that `a` isn't available on line 5. In other words, it isn't in scope outside of the `if` block.

If, on the other hand, you declare the variable outside the `if` block, the variable is available within the block as well as after the block ends.

```js
let a = 'foo';
if (1 === 1) {
  a = 'bar';
}

console.log(a);    // => 'bar'
```

As we can see, this code prints the string `"bar"` since `a` is accessible inside the block. Thus, we can reassign it to a different value inside the block. In other words, this `a` has a broader scope than the `a` variable in the previous example.

Constants declared with `const` have the same scope as variables declared with `let`. However, there's a third type of variable declaration that uses the `var` keyword and doesn't use block-scoping. We discuss `var` and variable scoping in more detail in the Launch School courses. For now, `let`, `const`, and block scope are the important takeaways of this section.

[A Common Gotcha](https://launchschool.com/books/javascript/read/variables#acommongotcha)

Be sure to always declare your variables and constants with `let` and `const`. JavaScript is a forgiving language, and one of the ways it demonstrates that occurs when you fail to declare a variable or constant. You can create them willy-nilly merely by assigning a variable to a value:

```js
p = 'foo';
```

That looks harmless, but JavaScript has some bizarre rules when working with undeclared variables. The most notable rule is that all undeclared variables have global scope: they ignore block and function scope entirely. If another function uses that same variable name without declaring it, there's a good chance that one function will step on the other by changing the content of the variable. You don't want that to happen: it's typically difficult to debug, and sometimes fixing it breaks other code.

Javascript book on  varibale scope: https://launchschool.com/books/javascript/read/variables#variablescope

## Hoisting

JavaScript processes variable declarations before it executes any code within a scope. So, declaring a variable anywhere in a scope is equivalent to declaring it at the top of the scope. We call this behavior **hoisting**; JavaScript effectively moves the variable **declarations** to the top of the scope.

With hoisting, this code:

```javascript
console.log(a);  // Will this code execute? What will it log?
var a = 123;
var b = 456;
```

is equivalent to:

```javascript
var a;           // hoisted to the top of the global scope
var b;

console.log(a);  // logs `undefined`
a = 123;
b = 456;
```

We frequently combine variable declarations with variable assignments, e.g., `var a = 1;`. JavaScript hoists only variable declarations, **not assignments**. This is why the previous code logs `undefined`.

## Hoisting for Function Declarations

JavaScript also hoists function declarations to the top of the scope; it hoists the entire function declaration, including the body:

```javascript
console.log(hello());

function hello() {
  return 'hello world';
}
```

is equivalent to:

```javascript
function hello() {
  return 'hello world';
}

console.log(hello());      // logs "hello world"
```

https://launchschool.com/lessons/7cd4abf4/assignments/510e62bb

### Function declarations, expressions and scopes

Hoisting for Function Expressions

Function expressions often involve assigning a function to a declared variable; since such expressions are just variable declarations, they obey the hoisting rules for variable declarations.

```javascript
console.log(hello());

var hello = function () {
  return 'hello world';
};
```

is equivalent to:

```javascript
var hello;

console.log(hello());    // raises "Uncaught TypeError: hello is not a function"

hello = function () {
  return 'hello world';
};
```

Hoisting Variable and Function Declarations

When both a variable and a function declaration exist, the function declaration is hoisted first (located above the variable declaration). Given the following code block:

```javascript
bar();              // logs undefined
var foo = 'hello';

function bar() {
  console.log(foo);
}
```

the equivalent hoisted code will look like this:

```javascript
function bar() {
  console.log(foo);
}

var foo;

bar();          // logs undefined
foo = 'hello';
```

Given the hoisted code, the key thing to watch out for is the value that is logged. For this particular scenario, since `bar` uses a variable that is in the global scope, the timing of the assignment becomes relevant. It is easy to make a mistake and think that since `bar` was declared below the assignment of `'hello'` to `foo` (see code before hoisting) that when `bar` is invoked the value logged will be `'hello'` already. However, because of the hoisting rules for variable and function declaration `foo` is still undefined when `bar` is invoked.

Furthermore, if the same name is used for a variable and a function:

```javascript
snippet1bar();             // logs "world"
var bar = 'hello';

function bar() {
  console.log('world');
}
snippet2var bar = 'hello';
bar();             // raises "Uncaught TypeError: bar is not a function"

function bar() {
  console.log('world');
}
```

You will notice how a slight change in code results in a significant change in the outcome. Let's look at the hoisted version of the two code snippets:

```javascript
snippet1function bar() {
  console.log('world');
}

bar();
bar = 'hello';
snippet2function bar() {
  console.log('world');
}

bar = 'hello';
bar();
```

Since function declarations are hoisted first, the variable declaration of the same name becomes redundant (notice that there is no longer a `var bar` in the code snippets). Since the variable declaration is redundant, what remains is the reassignment. Being a reassignment, this becomes a problem for snippet2, since `bar` will no longer be of type `function`, and therefore results in an error when we try to invoke `bar`.

## Best Practice to Avoid Confusion

Hoisting can introduce confusion and subtle bugs if you don't pay careful attention. However, if you follow these two simple rules, you'll avoid many headaches:

- Always declare variables at the top of their scope:

  ```javascript
  function foo() {
    var a = 1;
    var b = 'hello';
    var c;
  
    ...
  }
  ```

- Always declare functions before calling them:

  ```javascript
  function foo() {
    return 'hello';
  }
  
  foo();
  ```

### Object properties and mutation

## Property Names and Values

A property name for an object can be any valid string, and a property value can be any valid expression:

```javascript
var object = {
  a: 1,                           // a is a string with quotes omitted
  'foo': 2 + 1,                   // property name with quotes
  'two words': 'this works too',  // a two word string
  true: true,                     // property name is implicitly converted to string "true"
  b: {                            // object as property value
    name: 'Jane',
    gender: 'female',
  },
  c: function () {                // function expression as property value
    return 2;
  },
};
```

## Accessing Property Values

You can access property values using "dot notation" or "bracket notation":

```javascript
var object = {
  a: 'hello',
  b: 'world',
};

object.a;                 // "hello", dot notation
object['b'];              // "world", bracket notation
object.c;                 // undefined when property is not defined

var foo = {
  a: 1,
  good: true,
  'a name': 'hello',
  person: {
    name: 'Jane',
    gender: 'female',
  },
  c: function () {        // function expression as property value
    return 2;
  },
};

foo['a name'];            // "hello", use bracket notation when property name is an invalid identifier
foo['goo' + 'd'];         // true, bracket notation can take expressions
var a = 'a';
foo[a];                   // 1, bracket notation works with variables since they are expressions
foo.person.name;          // "Jane", dot notation can be chained to "dig into" nested objects
foo.c();                  // 2, Call the method 'c'
```

JavaScript style guides usually recommend using dot notation when possible.

Adding and Updating Properties

To add a new property to an object, use "dot notation" or "bracket notation" and assign a value to the result:

```javascript
var object = {};              // empty object

object.a = 'foo';
object.a;                     // "foo"

object['a name'] = 'hello';
object['a name'];             // "hello"

object;                       // { a: "foo", "a name": "hello" }
```

If the named property exists, the assignment updates the property's value:

```javascript
var object = {};

object.a = 'foo';
object.a;                    // "foo"

object.a = 'hello';
object.a;                    // "hello"

object['a'] = 'world';
object.a;                    // "world"
```

You can use the reserved keyword `delete` to delete properties from objects:

```javascript
var foo = {
  a: 'hello',
  b: 'world',
};

delete foo.a;
foo;                      // { b: "world" }
```

https://launchschool.com/lessons/79b41804/assignments/5564f6e8

Stepping through Object Properties

Objects are a collection type. This means a single Object can store multiple values. A common task is to perform some action for each element in a collection. You can do this with a `for...in` loop:

```javascript
var nick;

var nicknames = {
  joseph: 'Joey',
  margaret: 'Maggie',
};

for (nick in nicknames) {
  console.log(nick);
  console.log(nicknames[nick]);
}

// logs on the console:
joseph
Joey
margaret
Maggie
```

You can also retrieve the names of all properties in an object with `Object.keys`:

```javascript
var nicknames = {
  joseph: 'Joey',
  margaret: 'Maggie',
};

Object.keys(nicknames);  // [ 'joseph', 'margaret' ]
```

### Assignments and comparison

Search "Equality Comparison" on this page:

https://launchschool.com/books/javascript/read/basics

Search "variable assingment" on this page:

https://launchschool.com/lessons/7cd4abf4/assignments/0b1349b7

### Pure functions and side effects

We've seen that Functions can modify external values. They can directly modify variables defined in outer scopes, or they can mutate Objects passed to the Function as arguments. We call such changes to the world outside the Function **side effects**.

When a Function doesn't have any side effects, we call it a **pure function**. A pure function is a function that (1) does not have any side effects, and (2) always has the same return values given the same arguments.

Pure functions always return values. A Function that has no side effects and doesn't return a value can't do much of anything.

Here is a short pure function:

```javascript
function add(a, b) {
  return a + b;
}
```

Notice that this Function doesn't modify any external values.

However, this similar function has side effects:

```javascript
var sum = 0;
function add(a, b) {
  sum = a + b;
}
```

The second `add` Function changes the value of `sum`; that's a side effect. Thus, this version of the function is not pure.

Similarly, the following function isn't a pure function because it does not return the same result given the same argument value(s):

```javascript
var currentTotal = 0;
function addToTotal(num) {
  return currentTotal + num;
}

addToTotal(5);      // returns 5

currentTotal = 5;

addToTotal(5);      // returns 10
```

Finally, the following function isn't a pure function even though it always returns the same value given the same argument because it has the side effect of dropping elements from the array argument passed to it:

```javascript
function clear(array) {
  array.length = 0;
  return array;
}
```

## Pure Function Return Value vs Non-Pure Function Side Effects

When you write a function, be mindful of whether you want a pure function or want to use side effects. If you use a function for its return value, you usually want the function call as part of an expression, or as the right hand side of an assignment:

```javascript
function joinString(a, b, c) {
  return a.concat(b, c);
}

var result = joinString('hello,', ' ', 'world!');
console.log(result);             // logs "hello, world!"
```

When you write functions this way, avoid causing non-obvious side effects. This function has no side effects, and developers generally don't expect it to have side effects because the return value is captured and utilized.

If you want to use a function for a side effect, as much as possible try to pass the variable(s) you will mutate as argument(s):

```javascript
var friends = ['Joe', 'Mary', 'David'];

function removeElement(array, element) {
  var i;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] === element) {
      array.splice(i, 1);
    }
  }
}

removeElement(friends, 'David');     // undefined
friends;                             // ["Joe", "Mary"]
```

Notice that the `removeElement` function takes an array as an argument instead of mutating the `friends` array directly.

**Functions that cause unexpected side effects are a major source of bugs.** Be mindful of all side effects that your functions can cause.

You can change non-pure functions to pure functions to eliminate side effects:

```javascript
var friends = ['Joe', 'Mary', 'David'];

function removeElement(array, element) {
  var newArray = [];
  var i;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] !== element) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

removeElement(friends, 'David');    // ["Joe", "Mary"]
friends;                            // ["Joe", "Mary", "David"]
```

In this version, we don't mutate the array: instead, we build a new array and return it. This function has no side effects and is safer. You do, of course, have to use something like `friends = removeElement(friends, 'David');` to replace the original `friends` array; this more clearly shows your intent.

https://launchschool.com/lessons/79b41804/assignments/88138dd5

