// a shortcut to if{} and else{} statements
// condition ? codeIftrue : codeIfFalse;

let age = 21;
let message = age >= 18 ? "You can vote!" : "You cannot vote yet.";
console.log(message); // Output: You can vote!

let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting); // Output: Good afternoon!

let purchaseAmount = 125;
let discount = purchaseAmount > 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - discount}.`); // Output: Your total is $115.
// Example with nested ternary operators

let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(`Your grade is ${grade}.`); // Output: Your grade is B.
// Ternary operators can be useful for simple conditions, but for complex logic, traditional if-else statements are often clearer.