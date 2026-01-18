// map() = accepts a callback function and creates a new array
// by applying the callback function to each element of the original array.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8, 10]
// You can also use arrow functions for a more concise syntax:
const squared = numbers.map(number => number * number);

console.log(squared); // Output: [1, 4, 9, 16, 25]
// You can access the index and the entire array as additional arguments:
const detailed = numbers.map((number, index, array) => {
    return `Index: ${index}, Value: ${number}, Array: ${array}`;
});
console.log(detailed);
// Output:
// [
//   'Index: 0, Value: 1, Array: 1,2,3,4,5',
//   'Index: 1, Value: 2, Array: 1,2,3,4,5',
//   'Index: 2, Value: 3, Array: 1,2,3,4,5',
//   'Index: 3, Value: 4, Array: 1,2,3,4,5',
//   'Index: 4, Value: 5, Array: 1,2,3,4,5'
// ]
// Note: map() returns a new array without modifying the original array.
// If you need to perform side effects without creating a new array, consider using forEach() instead.
// Example using forEach():
let sum = 0;
numbers.forEach(number => {
    sum += number;
});
console.log(sum); // Output: 15
// In summary, map() is useful for transforming each element of an array and creating a new array with the results.