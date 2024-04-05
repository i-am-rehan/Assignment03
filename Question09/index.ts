// Define a function to check if a number is even or odd
function checkEvenOrOdd(number: number) {
  // Check if the number is divisible by 2 (even) or not
  if (number % 2 === 0) {
    // If the number is divisible by 2, return "Even"
    return "Even";
  } else {
    // If the number is not divisible by 2, return "Odd"
    return "Odd";
  }
}

// Test the function with different numbers and log the results to the console
console.log(checkEvenOrOdd(7));
console.log(checkEvenOrOdd(4));
console.log(checkEvenOrOdd(5));
console.log(checkEvenOrOdd(6));
