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
// set a specific date
const anotherDate = new Date();
anotherDate.setFullYear(2023);
anotherDate.setMonth(0); // January
anotherDate.setDate(1);
anotherDate.setHours(0);
anotherDate.setMinutes(0);
anotherDate.setSeconds(0);
console.log("Another specific date and time:", anotherDate);
// calculate the difference between two dates
const pastDate = new Date('2020-01-01T00:00:00');
const diffInMilliseconds = now - pastDate;
const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));