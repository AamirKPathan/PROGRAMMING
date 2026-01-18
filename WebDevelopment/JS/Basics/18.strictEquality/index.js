// = assignment operator
// == loose equality operator
// === strict equality operator
// != inequality operator
// !== strict inequality operator
let a = 5;
let b = '5';
console.log(a == b);  // true, because values are equal after type coercion
console.log(a === b); // false, because types are different
console.log(a != b);  // false, because values are equal after type coercion
console.log(a !== b); // true, because types are different
// Example with different types
let c = 0;
let d = false;
console.log(c == d);  // true, because 0 is considered equal to false after type coercion
console.log(c === d); // false, because types are different
console.log(c != d);  // false, because 0 is considered equal to false after type coercion
console.log(c !== d); // true, because types are different
// Example with objects
let obj1 = { name: 'Alice' };
let obj2 = { name: 'Alice' };
console.log(obj1 == obj2);  // false, because they are different references
console.log(obj1 === obj2); // false, because they are different references
console.log(obj1 != obj2);  // true, because they are different references
console.log(obj1 !== obj2); // true, because they are different references
// Example with same object reference
let obj3 = obj1;
console.log(obj1 == obj3);  // true, because they reference the same object
console.log(obj1 === obj3); // true, because they reference the same object
console.log(obj1 != obj3);  // false, because they reference the same object
console.log(obj1 !== obj3); // false, because they reference the same object
// Summary
// Use '===' and '!==' for comparisons to avoid unexpected results due to type coercion.
// Use '==' and '!=' only when you specifically want type coercion to occur.
// Always be cautious when comparing different data types.
// Demonstrating strict equality and inequality operators in JavaScript 