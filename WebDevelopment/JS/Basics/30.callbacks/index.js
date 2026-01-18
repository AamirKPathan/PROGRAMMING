// callback = a functions passed as an argument to another function
// used to handle asynchronous operations
// Reading A File
// Network Requests
// Interacting With Databases

function greet(name) {
    console.log('Hello ' + name);
}

function processUserInput(callback) {
    const name = prompt('Please enter your name.');
    callback(name);
}
processUserInput(greet);
// In this example, the greet function is passed as a callback to processUserInput.
// When processUserInput is called, it prompts the user for their name and then calls the greet function with that name.
// This allows for a separation of concerns, where processUserInput handles the user input logic,
// while greet handles the greeting logic.
// Callbacks are commonly used in JavaScript for handling asynchronous operations,
// such as reading files, making network requests, or interacting with databases.
// They allow you to define what should happen once an operation is complete,
// without blocking the execution of the rest of your code.
// This makes your code more efficient and responsive.
// Example of asynchronous callback using setTimeout
console.log('Start');
setTimeout(() => {
    console.log('This message is shown after 2 seconds');
}, 2000);
console.log('End');
// In this example, the function passed to setTimeout is a callback that will be executed after a delay of 2 seconds.
// The rest of the code continues to execute without waiting for the timeout to complete.
// This demonstrates how callbacks can be used to handle asynchronous operations in JavaScript.
// Callbacks can also be used in event handling, such as responding to user interactions like clicks or key presses.
document.getElementById('myButton').addEventListener('click', () => {
    console.log('Button was clicked!');
});
// In this example, the function passed to addEventListener is a callback that will be executed when the button is clicked.
// This allows you to define custom behavior in response to user actions.
// Overall, callbacks are a powerful feature of JavaScript that enable you to write flexible and efficient code
// by allowing functions to be passed as arguments and executed at a later time.