// Define a function to print the multiplication table for a given number up to 10
function printMultiplicationTable(number: number): void {
  console.log("Multiplication table for", number, "up to 10:");
  for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + number * i);
  }
}

// Test case
let number = 5;
printMultiplicationTable(number);
