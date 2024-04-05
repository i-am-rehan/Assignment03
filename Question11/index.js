"use strict";
// Define a function to assign grades based on scores
function assignGrade(score) {
    // Check if the score is less than 32
    if (score < 32) {
        return "F"; // Return "F" if the score is less than 32
    }
    // Check if the score is less than or equal to 50
    else if (score <= 50) {
        return "D"; // Return "D" if the score is less than or equal to 50
    }
    // Check if the score is less than or equal to 70
    else if (score <= 70) {
        return "B"; // Return "B" if the score is less than or equal to 70
    }
    // Check if the score is less than or equal to 90
    else if (score <= 90) {
        return "A"; // Return "A" if the score is less than or equal to 90
    }
}
// Test the function with different scores and log the results to the console
console.log(assignGrade(40)); // Output: D
console.log(assignGrade(22)); // Output: F
console.log(assignGrade(50)); // Output: D
console.log(assignGrade(90)); // Output: A
