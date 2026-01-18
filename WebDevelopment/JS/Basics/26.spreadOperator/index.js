// spread operator = ... allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected

// Example with arrays
const numbers = [1, 2, 3];
console.log(...numbers); // Output: 1 2 3
const moreNumbers = [4, 5, 6];
const allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // Output: [1, 2, 3, 4, 5, 6]
// Example with function calls
function sum(a, b, c) {
    return a + b + c;
}
const nums = [1, 2, 3];
console.log(sum(...nums)); // Output: 6
// Example with strings
const str = "Hello";
const chars = [...str];

console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']
// Example with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }
(function(name) {
    console.log('Hello, ' + name + '! This function runs immediately upon definition!');
})('Grace');
(function() {
    console.log('This function runs immediately upon definition!');
})();
(function() {
    console.log('This function runs immediately upon definition!');
})();
(function(name) {
    console.log('Hello, ' + name + '! This function runs immediately upon definition!');
})('Grace');