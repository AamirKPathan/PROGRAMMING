const decreaseButton = document.getElementById('decreaseButton');
const resetButton = document.getElementById('resetButton');
const increaseButton = document.getElementById('increaseButton');
const countLabel = document.getElementById('countLabel');

let count = 0;
decreaseButton.onclick = function() {
    count--;
    countLabel.textContent = count;
}
resetButton.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}
increaseButton.onclick = function() {
    count++;
    countLabel.textContent = count;
}
// Counter program to increase, decrease and reset a count value displayed on the webpage.