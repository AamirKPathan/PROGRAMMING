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
// 3. Mow The Lawn
function walkTheDog() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Walked the dog.");
            resolve();
        }, 1000);
    });
}

function washTheCar() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Washed the car.");
            resolve();
        }, 1500);
    });
}
function mowTheLawn() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Mowed the lawn.");
            resolve();
        }, 1200);
    });
}
// Chaining Promises
walkTheDog()
    .then(() => washTheCar())
    .then(() => mowTheLawn())
    .then(() => {
        console.log("All chores are done!");
    });
// Using async/await
async function doChores() {
    await walkTheDog();
    await washTheCar();
    await mowTheLawn();
    console.log("All chores are done!");
}
doChores();