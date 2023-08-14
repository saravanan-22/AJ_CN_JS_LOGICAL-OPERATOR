// console.log(" " || "Hello"); // output => "Hello"
// In this case, the first operand is an empty string ''. Since an empty string is falsy, the logical OR operator will move on to evaluate the second operand. The second operand is the string "Hello", which is truthy. Therefore, the expression " " || "Hello" will evaluate to "Hello", and that is what will be logged to the console.

let user = "John";
console.log(user || "Guest User..."); // In JavaScript, the logical OR operator (||) returns the value of the first truthy operand it encounters. In this case, the variable user has a truthy value because it is a non-empty string. Therefore, the expression user || "Guest User..." will evaluate to "John", and that is what will be logged to the console.

// If user had a falsy value, such as an empty string '', undefined, null, 0, or NaN, then the expression user || "Guest User..." would evaluate to "Guest User...".
