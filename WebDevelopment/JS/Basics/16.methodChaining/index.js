// NO METHOD CHAINING

let username = window.prompt("Enter your username:");
username = username.trim();
let letter = username.charAt(0).toUpperCase();

let extraChars = username.slice(1).toLowerCase();
let formattedUsername = letter + extraChars;
console.log("Formatted Username:", formattedUsername);

// WITH METHOD CHAINING
let userInput = window.prompt("Enter your username:");
let formattedInput = userInput.trim().charAt(0).toUpperCase() + userInput.trim().slice(1).toLowerCase();
console.log("Formatted Username with Method Chaining:", formattedInput);
// method chaining allows us to call multiple methods on a single line