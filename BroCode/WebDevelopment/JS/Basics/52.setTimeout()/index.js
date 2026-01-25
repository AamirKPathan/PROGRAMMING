// setTimeout() is a JavaScript function that allows you to execute a piece of code or a function after a specified delay (in milliseconds).
// It is commonly used for creating delays, scheduling tasks, or executing code asynchronously.
// Syntax:
// setTimeout(function, delay, arg1, arg2, ...);
// Parameters:
// function: The function to be executed after the delay.
// delay: The time in milliseconds to wait before executing the function.
// arg1, arg2, ...: Optional arguments that can be passed to the function when it is executed.
// Example:
console.log("Start");
setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);

console.log("End");
// In this example, "Start" is logged immediately, then after a 2-second delay, the message inside the setTimeout function is logged, followed by "End".
// Note: setTimeout() returns a timeout ID that can be used with clearTimeout() to cancel the timeout if needed.
// Example of clearing a timeout:
const timeoutId = setTimeout(() => {
    console.log("This message will not be displayed");
}, 3000);
clearTimeout(timeoutId);
// In this case, the timeout is cleared before it can execute, so the message will not be displayed.