// synchronous is code that executes consecutively in a sequential manner

// asynchronous is code that executes independently of the main program flow, allowing other operations to continue while waiting for the asynchronous operation to complete

// Example of synchronous code
console.log("Synchronous Code Start");
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log("Synchronous Code End");
// Example of asynchronous code using setTimeout
console.log("Asynchronous Code Start");
setTimeout(() => {
    console.log("This message is from asynchronous code after 2 seconds");
}, 2000);
console.log("Asynchronous Code End");
// Example of asynchronous code using Promises
console.log("Promise Example Start");
const asyncOperation = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved after 3 seconds");
    }, 3000);
});
asyncOperation.then((message) => {
    console.log(message);
});
console.log("Promise Example End");