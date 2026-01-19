// date objects are objects that represent dates and times

// create a new date object for the current date and time
const now = new Date();
console.log("Current date and time:", now);
// create a date object for a specific date
const specificDate = new Date('2022-12-25T10:30:00');
console.log("Specific date and time:", specificDate);
// get individual components of the date
const year = now.getFullYear();
const month = now.getMonth() + 1; // months are zero-indexed
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);
console.log(`Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);
// format the date as a string
const formattedDate = now.toLocaleString();
console.log("Formatted date and time:", formattedDate);
