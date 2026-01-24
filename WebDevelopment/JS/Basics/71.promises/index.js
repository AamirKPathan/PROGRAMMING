// Promise = an object that manages asynchronous operations in JavaScript
// It represents a value that may be available now, in the future, or never
// States: pending, fulfilled, rejected
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
    setTimeout(() => {
        if (success) {
            resolve("Promise fulfilled!");
        } else {
            reject("Promise rejected!");
        }
    }, 2000);
} 
);
// Consuming a Promise
myPromise
    .then((value) => {
        console.log(value); // Handle fulfilled state
    })
    .catch((error) => {
        console.error(error); // Handle rejected state
    })
    .finally(() => {
        console.log("Promise has been settled."); // Always runs
    });
// DO THESE CHORES IN ORDER
// 1. Walk The Dog
// 2 . Wash The Car
/