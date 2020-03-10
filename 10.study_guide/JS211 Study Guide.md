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

### Variable scopes and hoisting

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



## [A Common Gotcha](https://launchschool.com/books/javascript/read/variables#acommongotcha)

Be sure to always declare your variables and constants with `let` and `const`. JavaScript is a forgiving language, and one of the ways it demonstrates that occurs when you fail to declare a variable or constant. You can create them willy-nilly merely by assigning a variable to a value:

```js
p = 'foo';
```

That looks harmless, but JavaScript has some bizarre rules when working with undeclared variables. The most notable rule is that all undeclared variables have global scope: they ignore block and function scope entirely. If another function uses that same variable name without declaring it, there's a good chance that one function will step on the other by changing the content of the variable. You don't want that to happen: it's typically difficult to debug, and sometimes fixing it breaks other code.

Javascript book on  varibale scope: https://launchschool.com/books/javascript/read/variables#variablescope

### Function declarations, expressions and scopes

### Object properties and mutation

### Assignments and comparison

Search "Equality Comparison" on this page:

https://launchschool.com/books/javascript/read/basics

### Pure functions and side effects