"use strict";
// Define a function to find the maximum of three numbers
function maxOfThree(x, y, z) {
    // Using the Math.max function to find the maximum of the three numbers
    return Math.max(x, y, z);
}
// Test cases
let x = 5, y = 10, z = 3;
console.log("Maximum of", x, ",", y, ", and", z, "is:", maxOfThree(x, y, z)); // Output: 10
(x = -1), (y = 0), (z = -5);
console.log("Maximum of", x, ",", y, ", and", z, "is:", maxOfThree(x, y, z)); // Output: 0
(x = 100), (y = 100), (z = 100);
console.log("Maximum of", x, ",", y, ", and", z, "is:", maxOfThree(x, y, z)); // Output: 100
