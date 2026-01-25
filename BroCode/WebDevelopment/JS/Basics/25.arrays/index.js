// array = a variable like structure that can hold more than 1 value
let fruits = ['apple', 'banana', 'cherry', 'date'];
console.log(fruits);
console.log(fruits[0]); // access first element
console.log(fruits[2]); // access third element
console.log('Number of fruits:', fruits.length); // length of array
// loop through array
for (let i = 0; i < fruits.length; i++) {
    console.log('Fruit at index', i + ':', fruits[i]);
}
// add element to end
fruits.push('elderberry');
console.log('After push:', fruits);
// remove last element
let lastFruit = fruits.pop();
console.log('Popped fruit:', lastFruit);
console.log('After pop:', fruits);
// add element to beginning
fruits.unshift('avocado');
console.log('After unshift:', fruits);
// remove first element
let firstFruit = fruits.shift();
console.log('Shifted fruit:', firstFruit);
console.log('After shift:', fruits);
// find index of an element
let index = fruits.indexOf('cherry');
console.log('Index of cherry:', index);
// remove element by index
if (index !== -1) {
    fruits.splice(index, 1);
    console.log('After removing cherry:', fruits);
}
// create a new array using map
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log('Uppercase fruits:', upperFruits);
// filter array
let filteredFruits = fruits.filter(fruit => fruit.startsWith('b'));
console.log('Fruits starting with b:', filteredFruits);
// find an element
let foundFruit = fruits.find(fruit => fruit.length > 5);
console.log('First fruit with length > 5:', foundFruit);
// reduce array to a single value
let allFruits = fruits.reduce((acc, fruit) => acc + ', ' + fruit);
console.log('All fruits:', allFruits);
// sort array
fruits.sort();
console.log('Sorted fruits:', fruits);
// reverse array
fruits.reverse();
console.log('Reversed fruits:', fruits);
// convert array to string
let fruitString = fruits.join(' | ');
console.log('Fruit string:', fruitString);
// convert string back to array
let newFruits = fruitString.split(' | ');
console.log('New fruits array:', newFruits);