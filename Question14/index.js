"use strict";
// Define a function to convert temperature from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    // Conversion formula: (Fahrenheit - 32) * 5/9
    return ((fahrenheit - 32) * 5) / 9;
}
// Test cases
let fahrenheit = 32;
console.log(fahrenheit + "°F is equivalent to " + fahrenheitToCelsius(fahrenheit) + "°C");
fahrenheit = 212;
console.log(fahrenheit + "°F is equivalent to " + fahrenheitToCelsius(fahrenheit) + "°C");
fahrenheit = 98.6;
console.log(fahrenheit + "°F is equivalent to " + fahrenheitToCelsius(fahrenheit) + "°C");
