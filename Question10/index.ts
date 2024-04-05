// Define a function to check voting eligibility based on age
function votingElegibility(age: number) {
  // Check if the age is 18 or above
  if (age >= 18) {
    // If the age is 18 or above, return "You can cast your vote"
    return "You can cast your vote";
  } else {
    // If the age is below 18, return "You are under 18"
    return "You are under 18";
  }
}

// Test the function with different ages and log the results to the console
console.log(votingElegibility(19));
console.log(votingElegibility(10));
