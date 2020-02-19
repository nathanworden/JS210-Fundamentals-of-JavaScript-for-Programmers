// Strings can hold any character in the UTF-16 character set, which provides thousands of different characters. Formatting characters, such as newlines, needs special handling by using escape sequences. For example, to store a string that contains multiple lines, the string must contain one or more newline characters; we use the escape sequence \n to specify a newline. For example:

var multiline = 'This string...\nspans multiple lines';

// String Concatenation
// If you want to append content to an existing string, you can use concatenation. Concatenation uses the + symbol in much the same way as addition does. However, concatenation and addition are fundamentally different operations. JavaScript always performs concatenation when + is used with a string operand. Otherwise, it performs addition. For example, if we have first and last name variables and want to combine them into a full name, we can use concatenation:

var firstName = 'John';
var lastName = 'Doe';
firstName + latName; // "John Doe"