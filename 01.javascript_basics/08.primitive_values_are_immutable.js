// The JavaScript primitives include these five types:

// number
// string
// boolean
// null
// undefined

// All JavaScript primitives are immutable. You cannot change them once you create them. Primitive values, especially strings, may appear to change during the lifetime of a JavaScript program. However, this is merely an illusion. JavaScript doesn't actually change the values. Instead, it assigns wholly new values to variables that used to contain different values. This means that you should remember to assign an expression to change the value in a variable; no function, method, or other operation will modify it for you. If you don't assign the new value to the desired variable, JavaScript won't do it for you.

a = 'hello';
a.toUpperCase(); // the "hello" string is not mutated, but a new "HELLO" string is returned.
a;                // still "hello"