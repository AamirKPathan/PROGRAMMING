// Async And Await

// Async and Await are syntactic sugar built on top of Promises in JavaScript. They provide a more readable and straightforward way to work with asynchronous code.
// An async function always returns a Promise. The await keyword can only be used inside an async function and it pauses the execution of the function until the Promise is resolved or rejected.
// Example of using async and await:

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
}
async function getData() {
    console.log("Fetching data...");
    const data = await fetchData();
    console.log(data);
}   