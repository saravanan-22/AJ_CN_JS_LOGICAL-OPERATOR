if (!true) {
  console.log("I am from if block");
} else {
  console.log("I am from else block");
}


// !true: This condition checks if the value true is negated using the logical NOT operator (!). /
// Since true is already a boolean value representing a truthy condition, negating it with ! results in false.

// if (!true) { ... } else { ... }: This is an if statement. 
// The condition inside the parentheses evaluates to false, as explained above. 
// In JavaScript, when the condition inside an if statement evaluates to a falsy value (false, null, undefined, 0, "", etc.), the code within the if block is not executed, and instead, the code within the else block (if provided) is executed.


// The condition !true evaluates to false.


// Since the condition is false, the code inside the if block (i.e., console.log("I am from if block");) will not be executed.


// Instead, the code inside the else block (i.e., console.log("I am from else block");) will be executed.