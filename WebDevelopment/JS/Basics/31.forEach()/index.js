// forEach()= is an array method that executes a provided function once for each array element.
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});
// Output:
// 1
// 2
// 3
// 4
// 5
// You can also use arrow functions for a more concise syntax:
numbers.forEach(number => console.log(number));
// Output:
// 1
// 2
// 3
// 4
// 5
// You can access the index and the entire array as additional arguments:
numbers.forEach((number, index, array) => {
    console.log(`Index: ${index}, Value: ${number}, Array: ${array}`);
});
// Output:
// Index: 0, Value: 1, Array: 1,2,3,4,5
// Index: 1, Value: 2, Array: 1,2,3,4,5
// Index: 2, Value: 3, Array: 1,2,3,4,5
// Index: 3, Value: 4, Array: 1,2,3,4,5

// Note: forEach() does not return a new array; it simply executes the function for each element.
// If you need to create a new array based on the original, consider using map() instead.
// Example using map():
const doubled = numbers.map(number => number * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
// Example using forEach() to accumulate values:
let sum = 0;
numbers.forEach(number => {
    sum += number;
});
console.log(sum); // Output: 15
// In summary, forEach() is useful for performing side effects with each element of an array.