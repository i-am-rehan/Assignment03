// This line declares a variable a and initializes it with the value 1.
let a: number = 1;
// This line declares a variable b and initializes it with the value 2.
let b: number = 2;

console.log("a =", a);
console.log("b =", b);

console.log("Before Swapping");

// This line prints the current value of variable a.
console.log("a =", a);
// This line prints the current value of variable b.
console.log("b =", b);

//Switching values

// This line temporarily stores the value of a in a variable called temp.
let temp = a;
// This line assigns the value of b to a, effectively swapping the values of a and b.
a = b;
// This line assigns the original value of a (stored in temp) to b, completing the swap.
b = temp;

console.log("After Swapping");

// This line prints the new value of variable a.
console.log("a =", a);
// This line prints the new value of variable b.
console.log("b =", b);

//Method #2
console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

// Switching the values without a third variable
a = a + b;
b = a - b;
a = a - b;

console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);
