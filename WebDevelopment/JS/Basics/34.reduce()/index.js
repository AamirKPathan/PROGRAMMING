// .reduce() = reduce the elements of an array to a single value (number, string, array, object, etc.)

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15
const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product); // 120
const max = numbers.reduce((accumulator, currentValue) => (currentValue > accumulator ? currentValue : accumulator), numbers[0]);
console.log(max); // 5
const min = numbers.reduce((accumulator, currentValue) => (currentValue < accumulator ? currentValue : accumulator), numbers[0]);
console.log(min); // 1
const concatenatedString = numbers.reduce((accumulator, currentValue) => accumulator + currentValue.toString(), "");
console.log(concatenatedString); // "12345"
const average = numbers.reduce((accumulator, currentValue, index, array) => {
    accumulator += currentValue;
    if (index === array.length - 1) {
        return accumulator / array.length;
    }
    return accumulator;
}, 0);

console.log(average); // 3
const flattenedArray = [[1, 2], [3, 4], [5]].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattenedArray);
// [1, 2, 3, 4, 5]
const wordArray = ["Hello", " ", "World", "!"];
const sentence = wordArray.reduce((accumulator, currentValue) => accumulator + currentValue, "");
console.log(sentence); // "Hello World!"
const charCount = sentence.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
}, {});
console.log(charCount);
// { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1, '!': 1 }
const factorial = (n) => {
    return n <= 1 ? 1 : n * factorial(n - 1);
};
const factOf5 = factorial(5);
console.log(factOf5); // 120
const powersOfTwo = [1, 2, 3, 4, 5].reduce((accumulator, currentValue) => {
    accumulator.push(2 ** currentValue);
    return accumulator;
}, []);
console.log(powersOfTwo);
// [2, 4, 8, 16, 32]