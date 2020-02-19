// Variable names should never start with an uppercase letter.

//Good
var book = 'Head-First JavaScript Programming';

//Bad
var Book = 'Head-First JavaScript Programming';



// Variables with multiple words in their name use a style called camelCase. The first letter of the first word of a camelCase name must be lowercase; each subsequent word should begin with an uppercase letter. You may sometimes see people use uppercase for words in a name; this is simply a matter of taste and is not something that will affect your code in any way. However, for Launch School, please lowercase the first letter.

// number, string, array, object
var myNumber = 26;
var myString = 'Double 13';
var myArray = [13, 13];
var myObject = {
  count: 26,
};

//functions
var addValues = function (a, b) {
  return a + b;
};

// Object properties use the same convention as well.
var myObject = {
  myNumber: 26,
  myMethod: function () {},
};

// Idiomatic vs. Non-Idiomatic Variable Names
// Variable names that follow the above naming convention are referred to as idiomatic names. Less commonly, you may also see variable names containing all uppercase letters, with multiple words separated by underscores, such as MY_CONSTANT. This signifies that the variable should be treated as a constant (i.e., it should never be reassigned). This can improve readability, but the functionality is the same because JavaScript has only one type of variable. Constants and variable names containing acronyms are also considered to be idiomatic names.

// Here are some examples of idiomatic names:

cat
employee
number1
fizzBuzz
validateUserInput
tacoShack42
MINUTES_PER_HOUR
parseURL

// On the other hand, syntactically valid names that do not follow these conventions are called non-idiomatic names. Here are some examples, each followed by a comment explaining why it is non-idiomatic:

_cat                   // starts with an underscore
Employee               // starts with an uppercase letter
number_1               // contains an underscore
fizzBUZZ               // second word is all uppercase
validate_User_Input    // contains underscores
taco$hack42            // contains a `$`
MINUTESPERHOUR         // 'constant' - missing underscores between words
paRseURL               // contains an uppercase letter inside of a non-acronym word


// Formatting
// When indenting code, we will always use two space characters. We never use tab characters.

// When using curly braces, if your block is multiple lines, the opening brace is on the same line as the initial statement and the ending brace is on its own line. If your block contains just a single-line statement, you may condense it to one line. However, watch your line length when you do this; long lines are difficult to read. The longer the line, the more difficult it is to scan the code quickly.


if (myObject.myNumber > 26) {
  console.log('Number is greater than 26');
} else {
  console.log('Number is less than or equal to 26');
}


// Semicolons should always terminate a statement. With no semicolon to separate them, JavaScript sometimes sees the next statement as part of the former statement, which leads to undesired behavior.

// if, for, and while statements always use spaces between the keywords and following opening parenthesis, and between the closing parenthesis and opening brace. This prevents confusion between built-in statements and function calls. You should also place space characters before and after operators and the equals symbol.

// Bad
i=0;
while(i<15){
  i+=1;
}

// Good
i = 0;
while (i < 15) {
  i += 1;
}




