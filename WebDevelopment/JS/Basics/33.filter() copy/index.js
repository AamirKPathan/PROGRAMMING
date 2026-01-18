// .filter() = creates a new array with all elements that pass the test implemented by the provided function.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(oddNumbers); // [1, 3, 5, 7, 9]
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 15 },
    { name: "Eve", age: 30 },
];
const adults = users.filter((user) => user.age >= 18);
console.log(adults);
// [
//   { name: "Alice", age: 25 },
//   { name: "Charlie", age: 19 },
//   { name: "Eve", age: 30 },
// ]
const minors = users.filter((user) => user.age < 18);
console.log(minors);
// [
//   { name: "Bob", age: 17 },
//   { name: "David", age: 15 },

// ]
const longNames = users.filter((user) => user.name.length > 3);
console.log(longNames);
// [

//   { name: "Alice", age: 25 },
//   { name: "Charlie", age: 19 },
//   { name: "David", age: 15 },
//   { name: "Eve", age: 30 },

// ]
const shortNames = users.filter((user) => user.name.length <= 3);
console.log(shortNames);
// [ { name: "Bob", age: 17 } ]


const startsWithA = users.filter((user) => user.name.startsWith("A"));
console.log(startsWithA);
// [ { name: "Alice", age: 25 } ]
const endsWithE = users.filter((user) => user.name.endsWith("e"));
console.log(endsWithE);
// [
//   { name: "Alice", age: 25 },
//   { name: "Charlie", age: 19 },

//   { name: "Eve", age: 30 },
// ]
const specificAges = users.filter((user) => [15, 25, 30].includes(user.age));
console.log(specificAges);
// [
//   { name: "Alice", age: 25 },
//   { name: "David", age: 15 },
//   { name: "Eve", age: 30 },
// ]
const notSpecificAges = users.filter((user) => ![15, 25, 30].includes(user.age));
console.log(notSpecificAges);
// [
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 19 },
// ]
const highAges = users.filter((user) => user.age > 20);
console.log(highAges);
// [ { name: "Alice", age: 25 }, { name: "Eve", age: 30 } ]
const lowAges = users.filter((user) => user.age <= 20);
console.log(lowAges);
// [

//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 19 },
//   { name: "David", age: 15 },
// ]

const namesWithC = users.filter((user) => user.name.includes("c") || user.name.includes("C"));
console.log(namesWithC);
// [ { name: "Charlie", age: 19 } ]
const namesWithoutE = users.filter((user) => !user.name.includes("e") && !user.name.includes("E"));
console.log(namesWithoutE);
// [ { name: "Bob", age: 17 }, { name: "David", age: 15 } ]
const teenageUsers = users.filter((user) => user.age >= 13 && user.age <= 19);
console.log(teenageUsers);
// [ { name: "Charlie", age: 19 }, { name: "Bob", age: 17 } ]
const nonTeenageUsers = users.filter((user) => user.age < 13 || user.age > 19);
console.log(nonTeenageUsers);
// [ { name: "Alice", age: 25 }, { name: "David", age: 15 }, { name: "Eve", age: 30 } ]
const namesWithFiveLetters = users.filter((user) => user.name.length === 5);
console.log(namesWithFiveLetters);
// [ { name: "Alice", age: 25 }, { name: "David", age: 15 } ]
const namesWithLessThanFiveLetters = users.filter((user) => user.name.length < 5);
console.log(namesWithLessThanFiveLetters);
// [ { name: "Bob", age: 17 }, { name: "Eve", age: 30 } ]
const namesWithMoreThanFiveLetters = users.filter((user) => user.name.length > 5);
console.log(namesWithMoreThanFiveLetters);
// [ { name: "Charlie", age: 19 } ]
console.log(emptyArray); // []
const allUsers = users.filter(() => true);
console.log(allUsers); // returns the original array
// [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 19 },
//   { name: "David", age: 15 },
//   { name: "Eve", age: 30 },
// ]