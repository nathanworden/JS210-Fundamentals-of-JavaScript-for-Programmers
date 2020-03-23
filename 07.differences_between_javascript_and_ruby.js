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

In Ruby, to access a specific value in a hash you can use bracket notation like this: 
person = { name: 'Jane'} 
person[:name]
In Javascript, you can use bracket notation OR you can use dot notation like this: person.name.
In Ruby you cant use dot notation.

In Javascript, when working with objects, JavaScript will coerce a non-string key to a string. If you use 1 and '1' as key values, they represent the same key. Example:
> let myObj = {}
> myObj[1] = 'hello'
> myObj['1'] = 'world'
> myObj[1]
= 'world'
In Ruby, hashes can have any class as a key and wont coerce the key you put into anything else.


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


In Ruby, the Array#reverse method is non-destrcutive. In Javascript, the Array#reverse method is destructive (it mutates the array). In Javascript the Array.prototype.reverse method cannot be called on a string. Only an array. There is no string.reverse method apparently.


In Ruby, if you assign a variable to a method like this:
def startle
  puts "Yikes!"
end
surprise = startle
The variable is assigned to the return value of the function. 
In JavaScript, function names are nothing special, they are just local variables that happen to have a function as a value. Since startle is just a local variable, we can assign it to a new local variable and call the function using that new name:
var surprise = startle;
surprise();
//logs:
Yikes!


In JavaScript, calling a function with too few arguments does not raise an error. (You can also pass more arguments to a function than it expects and it will not raise an error).
In Ruby, calling a function with too few arguments raises a NoMethod Error
Example:
function takeTwo(a, b) {
  console.log(a);
  console.log(b);
  console.log(a + b);
}

takeTwo(1) does not raise an error

def taketwo(a, b)
  puts a
  puts b
  puts a + b
end

taketwo(1) will raises a NoMethod Error

(Since Javascript allows this through, within a function, an argument that wasnt provided in the call will have the value undefined.)





JavaScript hoists variable declarations, which means that it processes variable declarations before it executes any code within the scope. Declaring a variable anywhere in a scope is equivalent to declaring it at the top of the scope. 
In Ruby variable declaration and variable assignment happen at the same time. So Ruby does not hoist variable declaration or assignment.


Example of Javascrpt hoisting:
This code:
console.log(a);
var a = 123;
varb = 456;

Is equivalent to:
var a;
var b;
console.log(a);
a = 123;
b = 456;



JavaScript also hoists function declarations to the top of the scope; it hoists the entire function declaration, including the body:
console.log(hello());
function hello() {
  return 'hello world';
}

Is equivalent to:
function hello() {
  return 'hello world';
}
console.log(hello());




When both a variable and a function declaration exist, the function declaration is hoisted first (located above the variable declaration).
Given the following code block:
bar();              // logs undefined
var foo = 'hello';

function bar() {
  console.log(foo);
}

The equivalent hoisted code would look like this:
function bar() {
  console.log(foo);
}

var foo;

bar();          // logs undefined
foo = 'hello';

Given the hoisted code, the key thing to watch out for is the value that is logged. For this particular scenario, since bar uses a variable that is in the global scope, the timing of the assignment becomes relevant. It is easy to make a mistake and think that since bar was declared below the assignment of 'hello' to foo (see code before hoisting) that when bar is invoked the value logged will be 'hello' already. However, because of the hoisting rules for variable and function declaration foo is still undefined when bar is invoked.






In JavaScript, arithmetic operators convert arrays to strings before performing the operation.
In Ruby, arthmetic operators are methods, and have specific functions for Arrays.

Javascript:
var initials = ['A', 'H', 'E'];
initials + 'B';                   // "A,H,EB"
initials;                         // [ "A", "H", "E" ]

Ruby:
initials = ['A', 'H', 'E'];
initials + 'B';  // Error

Javascript:
var initials = ['A', 'H', 'E']
initials + ['B', 'C']         // 'A,H,EB,C'

Ruby 
initials = ['A', 'H', 'E']
initials + ['B', 'C']           // ['A', 'H', 'E', 'B', 'C']



In Javascript, The relational comparison operators, >, >=, <, and <=, are useless with arrays and objects. They return true or false in unexpected ways. Dont use them with arrays or objects.



In Javascript Arrays are objects, which means they have more properties than just the indexed order of elements. You can add an element to a negative index that the array will remember, but not include as one of the propert array elements. Also, the array.length property will remain unchanced when you add elements at negative indexes.
In Ruby, a negative index counts back from the end of the array.




In JavaScript all functions have an arguments object that is available locally. The arguments object contains an entry for every argument passed to the function.
In Ruby you need a parameter for each argument passed in, or at lest *args. (Double check about how *args works)


JavaScript doesnt have a set of built in high-order functions for Objects as it does for Arrays. (However, you can use Objects.keys() to work with objects with higher level abstractions.)
With Ruby, Hashes have iterator functions, and they take two paramerters, one for a key and one for a value. Example:
hsh = {1 => 'a', 2=> 'b'}
hsh.each {|key, value| puts "key: #{key}, value: #{value}"}
//output: 
// key: 1, value: a
// key: 2, value: b


