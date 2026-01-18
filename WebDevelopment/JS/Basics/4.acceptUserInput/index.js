// 2 Ways
// 1. Easy Way = prompt() function
// 2. Professional Way = HTML Input Element

// Easy Way using prompt() function

// Declare Variables
/*
let username;

// Prompt the user for input
username = window.prompt("Enter your name: "); // prompt() function to accept user input

// Use the input
console.log("Hello " + username + "! Welcome to JavaScript Basics.");
*/

// Professional Way using HTML Input Element
document.getElementById("mySubmit").onclick = function() {
    // Declare Variables
    let username;
    // Get the value from the input element
    username = document.getElementById("myText").value;
    // Use the input
    console.log("Hello " + username + "! Welcome to JavaScript Basics.");
    document.getElementById("myH1").textContent = "Hello " + username + "! Welcome to JavaScript Basics.";
}