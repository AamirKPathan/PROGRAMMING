// function = a section of reusable code that performs a specific task

// function declaration
function greet() {
    console.log('Hello, world!');
}
greet(); // calling the function
greet(); // calling the function again
greet(); // calling the function again
greet(); // calling the function again
greet(); // calling the function again

// function with parameters
function greetPerson(name) {
    console.log('Hello, ' + name + '!');
}
greetPerson('Alice');
greetPerson('Bob');
greetPerson('Charlie');
greetPerson('Diana');
greetPerson('Eve');
greetPerson('Frank');

// function with multiple parameters
function addNumbers(num1, num2) {
    console.log(num1 + num2);
}
addNumbers(5, 10);
addNumbers(20, 30);

// function with return value
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
let result = multiplyNumbers(5, 10);
console.log(result);
result = multiplyNumbers(7, 8);
console.log(result);

// function expression
const square = function(num) {
    return num * num;
};
console.log(square(5));
console.log(square(10));

// arrow function
const divide = (num1, num2) => {
    return num1 / num2;
};
console.log(divide(10, 2));
console.log(divide(20, 4));

// concise arrow function
const subtract = (num1, num2) => num1 - num2;
console.log(subtract(10, 5));
console.log(subtract(20, 8));

// immediately invoked function expression (IIFE)
(function() {
    console.log('This function runs immediately upon definition!');
})();
(function(name) {
    console.log('Hello, ' + name + '! This IIFE runs immediately upon definition!');
})('Grace');