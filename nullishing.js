let a = 1;
console.log(a ?? "Hello"); // "Hello"


// let a = 1;: This line declares a variable a and assigns it the value 1.

// console.log(a ?? "Hello");: In this line, the ?? operator is used to check the value of a. 
// If a is not null or undefined, then the value of a is returned. 
// However, if a is null or undefined, the expression evaluates to the right-hand operand, which is the string "Hello".

// Since the value of a is 1 (not null or undefined), the expression a ?? "Hello" evaluates to 1, and that's what will be logged to the console.



// The "Hello" string is not used in this case because a is not null or undefined. 
// The nullish coalescing operator is particularly useful when you want to provide a default value for variables that might be null or undefined, allowing you to handle such cases more gracefully.