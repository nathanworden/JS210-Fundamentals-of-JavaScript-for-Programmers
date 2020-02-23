// In some programming languages, such as Ruby, bracket notation is a method. In JavaScript, it is actually an operator.

'hello'[1];         // "e"


// In ruby the only falsy values are false and nil.
// In JavaScript, there are 6 possible falsy values:
false        // falsy
null         // falsy
undefined    // falsy
0            // falsy
NaN          // falsy
''           // falsy


  

Undeclared variables in Javascript have global scope; they ignore bock and function scope entirely.


All JavaScript function calls by default, evaluate to undefined. In Ruby the last line in a method is the return value.

JavaScript is a pass-by-value language when dealing with primitive values (all primitive values are immutable), and a pass-by-reference language with objects and arrays.



Hashes in Ruby are called Objects in JavaScript.



In JavaScript you can't assign a variable to the result of an if/else statement. In Ruby you can. (verify this).'


The case statement in Ruby is called `switch` in JavaScript.
In Ruby, the case statement uses the keyword 'when' to define the different paths. In JavaScript, instead of 'when' the word 'case' is used instead. Also, switch statements in Javascript "fall through" meaning once a case condition is satisfied, all the rest of the case statements also run (even if they weren't truthy). This is almost alsways undesirable, and so it is convential to use the keyword 'break' at the end of every case path so that the evaluation ends'


JavaScript has an 'increment operator' (++) which is a syccinct syntact to increment a number by 1. There's also a corresponding decrement operator (--) that decrements a variable's value by 1. In Ruby you would have to do += 1 or -= 1.


JavaScript has first-class fuctions. That means that functions are values; you can assign them to varaibles, pass them around as arguments to other functions, and even use them as return values in other functions. Ruby is not able to do this. (verify Ruby doesn't have anything like this')


