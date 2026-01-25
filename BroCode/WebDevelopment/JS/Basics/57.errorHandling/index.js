// error is an unexpected issue that occurs during the execution of a program, which can disrupt the normal flow of the program
// handling is the process of managing these errors to prevent crashes and ensure smooth execution
// Example of error handling using try-catch
console.log("Error Handling Example Start");
try {
    // Intentionally causing a ReferenceError
    console.log(nonExistentVariable);
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("Execution continues after error handling.");
}
console.log("Error Handling Example End");
// Example of throwing custom errors
console.log("Custom Error Example Start");
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
try {
    console.log(divide(10, 0));
} catch (error) {
    console.error("Custom Error Caught:", error.message);
}
console.log("Custom Error Example End");
// Example of handling asynchronous errors with Promises
console.log("Asynchronous Error Handling Example Start");
const asyncErrorOperation = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Asynchronous operation failed."));
    }, 2000);
});
asyncErrorOperation
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("Caught asynchronous error:", error.message);
    });
console.log("Asynchronous Error Handling Example End");