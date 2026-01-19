// shuffle() = method used to shuffle elements of an array in place
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    return arr;
}
const shuffledArray = shuffleArray(array);
console.log(shuffledArray); // Output: Shuffled array, e.g., [3, 7, 1, 9, 2, 6, 10, 4, 5, 8]
// Note: shuffleArray() modifies the original array and also returns a reference to the same array