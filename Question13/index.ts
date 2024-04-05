// Define a function to check if a given year is a leap year
function isLeapYear(year: number): boolean {
  // Leap year is divisible by 4, but not by 100 unless it is also divisible by 400
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Test cases
let year = 2020;
console.log(year, "is a leap year?", isLeapYear(year)); // Output: true

year = 2021;
console.log(year, "is a leap year?", isLeapYear(year)); // Output: false

year = 1900;
console.log(year, "is a leap year?", isLeapYear(year)); // Output: false

year = 2000;
console.log(year, "is a leap year?", isLeapYear(year)); // Output: true
