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
Objects in Javascript are a collection of key-value pairs where the keys are strings and the values can be any type.
In Ruby, hashes can have keys of any class as well as values.


In JavaScript you can't assign a variable to the result of an if/else statement. In Ruby you can. (verify this).'


The case statement in Ruby is called `switch` in JavaScript.
In Ruby, the case statement uses the keyword 'when' to define the different paths. In JavaScript, instead of 'when' the word 'case' is used instead. Also, switch statements in Javascript "fall through" meaning once a case condition is satisfied, all the rest of the case statements also run (even if they weren't truthy). This is almost alsways undesirable, and so it is convential to use the keyword 'break' at the end of every case path so that the evaluation ends'


JavaScript has an 'increment operator' (++) which is a syccinct syntact to increment a number by 1. There's also a corresponding decrement operator (--) that decrements a variable's value by 1. In Ruby you would have to do += 1 or -= 1.


JavaScript has first-class fuctions. That means that functions are values; you can assign them to varaibles, pass them around as arguments to other functions, and even use them as return values in other functions. Ruby is not able to do this. (verify Ruby doesn't have anything like this')

In Ruby, #Array.push appends the argument provided to the end of the array and then returns the new array. In JavaScript, array.push() appends the element to the end of the array, but it returns the updated length of that array. (Note that #Arrray.pop does work the same in JavaScript and Ruby- it mutates the array by pulling the last element off and it returns that element.)


In Ruby, the Array#each method performs iteration and returns the original calling object. In JavaScript `forEach` performs iteration and then returns undefined.


In JavaScript you can change an Arrays length property to a new value. If you change it to a smaller value than the current length, the array gets truncated; JavaScript removes all elements beyond the new final element. If you change it to a larger value, the array expands to the new size. The new elements do not get initialized. In Ruby the Array#length method just returns the length of the array, and cannot be set like a property in JavaScript.

In Ruby if you use [] to assign a new value to an index in the array that is larger than the arrays length, Ruby will assign 'nil' to all the places between the old last element and the element. In Javascript these spots are left undefined.

In general, JavaScript treats unset array elements as missing (but the length property includes the unset elements), whereas Ruby assigns them as 'nil'

In JavaScript you can create array "elements" with indexes that use negative or non-integer, or non-numeric values. These "elements" arent true elements; they are properties on the array object, which we'll discuss latere. They don't count towards the length of the Array. You cant create array properties like this in Ruby.

In ruby [1, 2, 3] == [1, 2, 3] is true. But in Javascript [1, 2, 3] === [1, 2, 3] is false. This is because Javascript treats two arrays as equal when they are the same array: they must occupy the same spot in memory. This rule holds true for JavaScript objects in general; objects must be the same object. Just because two different arrays happen to have the same values does not mean they are the same array. 
In ruby the Array#sort method is non destructive (it does not mutate the calling array). In JavaScript, the sort method is destructive.

In ruby the Array#slice method starts at the index of the first argument and takes the number of elements forward of the second argument. In JavaScript the first argument is the index where the extraction begins, and the second is the index where the extraction ends.
Examples in Javascript:
> let fruits = ['mango', 'orange', 'banana', 'pear', 'apple']
> fruits.slice(1, 3)
= [ 'orange', 'banana' ]

> fruits.slice(2) // second argument defaults to rest of array
= [ 'banana', 'pear', 'apple' ]

> fruits.slice() // no arguments duplicates the array
= [ 'mango', 'orange', 'banana', 'pear', 'apple' ]
(In ruby, fruits.slice() throws an error.)


In Ruby, the Array#reverse method is non-destrcutive. In Javascript, the Array#reverse method is destructive (it mutates the array)
