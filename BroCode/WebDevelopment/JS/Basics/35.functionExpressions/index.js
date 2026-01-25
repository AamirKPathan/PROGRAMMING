// function declaration = define a resuable block of code that performs a specific task

// function expression = a way to define a function as values or variables

const add = function (a, b) {
    return a + b;
};
const sum = add(2, 3);
console.log(sum); // 5
// function expression can be anonymous (without a name) or named
const multiply = function multiplyNumbers(a, b) {
    return a * b;
};
const product = multiply(4, 5);
console.log(product); // 20
// function expressions can be used as arguments to other functions (callbacks)
function calculate(a, b, operation) {
    return operation(a, b);
}
const difference = calculate(10, 4, function (a, b) {

    return a - b;
});
console.log(difference); // 6
const quotient = calculate(20, 5, function divideNumbers(a, b) {
    return a / b;
});
console.log(quotient); // 4