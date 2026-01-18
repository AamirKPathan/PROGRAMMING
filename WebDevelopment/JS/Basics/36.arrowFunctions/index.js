// arrow functions = a concise way to write functions in JavaScript
// good for smple functions that you user only once

// traditional function expression
const add = function (a, b) {
    return a + b;
};
console.log(add(2, 3)); // Output: 5

// arrow function expression
const addArrow = (a, b) => {
    return a + b;
};
console.log(addArrow(2, 3)); // Output: 5
// arrow function with implicit return
const addImplicit = (a, b) => a + b;
console.log(addImplicit(2, 3)); // Output: 5
// arrow function with single parameter (no parentheses needed)
const square = x => x * x;
console.log(square(4)); // Output: 16
// arrow function with no parameters
const greet = () => console.log("Hello, World!");
greet(); // Output: Hello, World!
// arrow functions do not have their own 'this' context