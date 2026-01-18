// string methods allow you to manipulate and interact with strings in various ways

let username = `Captain_Blox`;

username.charAt(0); // 'C' - returns the character at the specified index
username.concat('_2024'); // 'Captain_Blox_2024' - joins two or more strings
username.includes('Blox'); // true - checks if the string contains a specified value
username.endsWith('x'); // true - checks if the string ends with a specified value
username.indexOf('a'); // 1 - returns the index of the first occurrence of a specified value
username.slice(0, 7); // 'Captain' - extracts a section of the string
username.toUpperCase(); // 'CAPTAIN_BLOX' - converts the string to uppercase
username.toLowerCase(); // 'captain_blox' - converts the string to lowercase
username.trim(); // 'Captain_Blox' - removes whitespace from both ends of the string
console.log(`Original Username: "${username}"`);
console.log(`Character at index 0: "${username.charAt(0)}"`);
console.log(`Concatenated Username: "${username.concat('_2024')}"`);
console.log(`Includes 'Blox': ${username.includes('Blox')}`);
console.log(`Ends with 'x': ${username.endsWith('x')}`);
console.log(`Index of 'a': ${username.indexOf('a')}`);
console.log(`Sliced Username (0-7): "${username.slice(0, 7)}"`);
console.log(`Uppercase Username: "${username.toUpperCase()}"`);
console.log(`Lowercase Username: "${username.toLowerCase()}"`);
console.log(`Trimmed Username: "${username.trim()}"`);
// You can run this code in a JavaScript environment to see the results of each string method in the console.