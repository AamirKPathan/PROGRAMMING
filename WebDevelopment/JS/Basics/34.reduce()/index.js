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

