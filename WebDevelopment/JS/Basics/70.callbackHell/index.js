// Callback hell is a situation in javascript where multiple nested callbacks make the code hard to read and maintain.
// This often happens when dealing with asynchronous operations like API calls, timers, or event handling.
// Example of callback hell:
setTimeout(() => {
    console.log("First callback");
    setTimeout(() => {
        console.log("Second callback");
        setTimeout(() => {
            console.log("Third callback");
        }, 1000);
    }, 1000);
}, 1000);