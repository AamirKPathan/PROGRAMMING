// sort() = method used to sort elements of an array in place
// sorts elements in lexicographic order
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.sort();
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]
// sort() can also take a compare function as an argument
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {
    return a - b;
});
console.log(points); // Output: [ 1, 5, 10, 25, 40, 100 ]
// Sorting in descending order
points.sort(function(a, b) {
    return b - a;
});
console.log(points); // Output: [ 100, 40, 25, 10, 5, 1 ]
// Sorting an array of objects
const cars = [
    {type: "Volvo", year: 2016},
    {type: "Saab", year: 2001},
    {type: "BMW", year: 2010}
];
cars.sort(function(a, b) {
    return a.year - b.year;
});
console.log(cars);
// Output:
// [
//   { type: 'Saab', year: 2001 },
//   { type: 'BMW', year: 2010 },

//   { type: 'Volvo', year: 2016 }
// ]
// Sorting strings in descending order
fruits.sort(function(a, b) {
    if (a < b) {
        return 1;
    }
    if (a > b) {
        return -1;
    }
    return 0;
});
console.log(fruits); // Output: [ 'Orange', 'Mango', 'Banana', 'Apple' ]
// Using arrow functions for more concise syntax
points.sort((a, b) => a - b);
console.log(points); // Output: [ 1, 5, 10, 25, 40, 100 ]
// Sorting strings using arrow functions
fruits.sort((a, b) => b.localeCompare(a));
console.log(fruits); // Output: [ 'Orange', 'Mango', 'Banana', 'Apple' ]

// Note: sort() modifies the original array and also returns a reference to the same array