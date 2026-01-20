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
console.log(`Difference between now and ${pastDate.toLocaleDateString()}: ${diffInDays} days`);
// convert date to ISO string
const isoString = now.toISOString();
console.log("ISO string representation:", isoString);
// parse a date string
const parsedDate = new Date(Date.parse('2023-03-15T12:00:00'));
console.log("Parsed date:", parsedDate);
// get the timestamp (milliseconds since January 1, 1970)
const timestamp = now.getTime();
console.log("Timestamp (milliseconds since Jan 1, 1970):", timestamp);
// add days to a date
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
const futureDate = addDays(now, 10);
console.log("Date after adding 10 days:", futureDate);
// subtract days from a date
function subtractDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
}
const pastDateSubtracted = subtractDays(now, 10);
console.log("Date after subtracting 10 days:", pastDateSubtracted);
// check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
const testYear = 2024;
console.log(`Is ${testYear} a leap year?`, isLeapYear(testYear));
// get the day of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = daysOfWeek[now.getDay()];
console.log("Today is:", dayOfWeek);
// set date to the last day of the month
function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
const lastDay = getLastDayOfMonth(2023, 1); // February 2023
console.log("Last day of February 2023:", lastDay);
// compare two dates
function compareDates(date1, date2) {
    if (date1 < date2) return -1;
    if (date1 > date2) return 1;
    return 0;
}
const comparisonResult = compareDates(new Date('2023-01-01'), new Date('2022-12-31'));
console.log("Comparison result between 2023-01-01 and 2022-12-31:", comparisonResult);
// output:
// Current date and time: [current date and time]
// Specific date and time: 2022-12-25T10:30:00.000Z
// Year: [current year], Month: [current month], Day: [current day]
// Hours: [current hours], Minutes: [current minutes], Seconds: [current seconds]
// Formatted date and time: [formatted current date and time]
// Another specific date and time: 2023-01-01T00:00:00.000Z
// Difference between now and 1/1/2020: [number of days] days
// ISO string representation: [ISO string of current date and time]
// Parsed date: 2023-03-15T12:00:00.000Z
// Timestamp (milliseconds since Jan 1, 1970): [timestamp]
// Date after adding 10 days: [date after adding 10 days]
// Date after subtracting 10 days: [date after subtracting 10 days]
// Is 2024 a leap year? true
// Today is: [current day of the week]
// Last day of February 2023: 28
// Comparison result between 2023-01-01 and 2022-12-31: 1