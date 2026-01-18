// Get DOM elements
const numDiceInput = document.getElementById('numDice');
const numSidesSelect = document.getElementById('numSides');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');
const individualRolls = document.getElementById('individualRolls');
const totalResult = document.getElementById('totalResult');

// Function to roll dice
function rollDice(numDice, numSides) {
    const rolls = [];
    for (let i = 0; i < numDice; i++) {
        // Generate a random number between 1 and numSides
        const roll = Math.floor(Math.random() * numSides) + 1;
        rolls.push(roll);
    }
    return rolls;
}

// Function to calculate sum using rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Function to display results
function displayResults(rolls) {
    const total = sum(...rolls);
    
    // Display individual rolls
    let rollsHTML = '<div class="rolls-list">';
    rolls.forEach(roll => {
        rollsHTML += `<div class="roll-item">${roll}</div>`;
    });
    rollsHTML += '</div>';
    document.querySelector('#individualRolls .rolls-list').innerHTML = rollsHTML;
    
    // Display total
    document.querySelector('#totalResult .value').innerHTML = total;
}

// Event listener for roll button
rollBtn.addEventListener('click', () => {
    const numDice = parseInt(numDiceInput.value) || 1;
    const numSides = parseInt(numSidesSelect.value) || 6;
    
    // Validate input
    if (numDice < 1 || numDice > 20) {
        alert('Please enter a number of dice between 1 and 20');
        return;
    }
    
    // Roll the dice and display results
    const rolls = rollDice(numDice, numSides);
    displayResults(rolls);
});

// Allow Enter key to roll dice
document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        rollBtn.click();
    }
});

// Event listener for reset button
resetBtn.addEventListener('click', () => {
    numDiceInput.value = '1';
    numSidesSelect.value = '6';
    document.querySelector('#individualRolls .rolls-list').innerHTML = '';
    document.querySelector('#totalResult .value').innerHTML = '0';
});
