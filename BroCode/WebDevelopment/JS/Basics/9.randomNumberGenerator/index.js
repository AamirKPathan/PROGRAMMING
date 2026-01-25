// RANDOM NUMBER GENERATOR

const min = 1;
const max = 7;

// Generate a random number between min (inclusive) and max (exclusive)
const randomNum = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNum);

const button = document.getElementById("myButton");
const label = document.getElementById("myLabel");
button.onclick = function() {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    label.textContent = randomNum;
}