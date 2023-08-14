    // let sum = 2 > 5 || 5 < 8;
// console.log (sum);

let sum = null;
let num;

console.log(false ?? true);



// let sum = null;: This line declares a variable named sum and assigns it the value null.

// let num;: This line declares a variable named num without assigning any value to it. 
// As a result, the variable num will have the initial value of undefined.

// console.log(false ?? true);: In this line, the nullish coalescing operator ?? is used with the operands false and true. 
// The nullish coalescing operator returns the right-hand operand (true in this case) if the left-hand operand (false in this case) is null or undefined.

// The output of this line depends on the behavior of the nullish coalescing operator and the values of the operands:

// The left-hand operand is false, which is not null or undefined.

// Therefore, the nullish coalescing operator returns the left-hand operand (false), as it's not nullish.

// So, the output of the code will be:

// arduino


// Copy code


// false


// In this case, the nullish coalescing operator doesn't come into play because the left-hand operand is not null or undefined. It simply returns the left-hand operand (false), and that value is then logged to the console using the console.log function.





