"use strict";
// Define a function to determine the sign of a number
function checkSign(number) {
    if (number > 0) {
        return "Positive"; // Return "Positive" if the number is greater than 0
    }
    else if (number < 0) {
        return "Negative"; // Return "Negative" if the number is less than 0
    }
    else {
        return "Zero"; // Return "Zero" if the number is equal to 0
    }
}
// Test cases
let number = 10;
console.log(number + " is " + checkSign(number)); // Output: Positive
number = -5;
console.log(number + " is " + checkSign(number)); // Output: Negative
number = 0;
console.log(number + " is " + checkSign(number)); // Output: Zero
