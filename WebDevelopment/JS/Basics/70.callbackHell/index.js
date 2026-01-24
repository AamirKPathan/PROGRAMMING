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

// To avoid callback hell, we can use Promises or async/await syntax.
// Example using Promises:
function firstCallback() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("First callback");
            resolve();
        }, 1000);
    });
}
function secondCallback() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Second callback");
            resolve();
        }, 1000);
    });
}
function thirdCallback() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Third callback");
            resolve();
        }, 1000);
    });
}