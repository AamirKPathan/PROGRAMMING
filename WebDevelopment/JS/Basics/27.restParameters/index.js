// rest parameters allow a function to accept an indefinite number of arguments as an array
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(sumAll(1, 2, 3)); // Output: 6
console.log(sumAll(5, 10, 15, 20)); // Output: 50
console.log(sumAll(100, 200)); // Output: 300
console.log(sumAll()); // Output: 0
