let secretNumber;
let attempts = 0;
let lowerBound = 1;
let upperBound = 100;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const feedback = document.getElementById('feedback');
const hints = document.getElementById('hints');
const attemptsDisplay = document.getElementById('attempts');
const rangeDisplay = document.getElementById('range');
const resetBtn = document.getElementById('resetBtn');

// Initialize the game
function initializeGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    lowerBound = 1;
    upperBound = 100;
    
    feedback.textContent = '';
    feedback.className = 'feedback';
    hints.textContent = '';
    attemptsDisplay.textContent = '0';
    rangeDisplay.textContent = '1-100';
    guessInput.value = '';
    guessInput.focus();
}

// Check the guess
function checkGuess() {
    const guess = parseInt(guessInput.value);
    
    // Validation
    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = `❌ Please enter a valid number between 1 and 100`;
        feedback.className = 'feedback invalid';
        hints.textContent = '';
        return;
    }
    
    attempts++;
    attemptsDisplay.textContent = attempts;
    
    if (guess === secretNumber) {
        // Win!
        feedback.textContent = `🎉 Correct! You found it in ${attempts} attempt${attempts !== 1 ? 's' : ''}!`;
        feedback.className = 'feedback correct';
        hints.textContent = 'Congratulations! Press "Play Again" to try another round.';
        guessBtn.disabled = true;
        guessInput.disabled = true;
    } else {
        const distance = Math.abs(guess - secretNumber);
        let tempEmoji = '';
        let tempText = '';
        let feedbackClass = '';
        
        if (distance <= 5) {
            // Really hot/cold
            tempEmoji = distance === 1 ? '🥵' : '🔥';
            tempText = distance === 1 ? 'EXTREMELY HOT! You\'re so close!' : 'Really hot! Very close now!';
            feedbackClass = 'feedback really-hot';
        } else if (distance <= 15) {
            // Warm/cool
            tempEmoji = '🌡️';
            tempText = 'Getting warm... You\'re heading in the right direction!';
            feedbackClass = 'feedback warm';
        } else if (distance <= 40) {
            // Cold
            tempEmoji = '❄️';
            tempText = 'Cold... Keep trying, you\'ll get there!';
            feedbackClass = 'feedback cold';
        } else {
            // Really cold
            tempEmoji = '🥶';
            tempText = 'Really cold! You\'re far away!';
            feedbackClass = 'feedback cold';
        }
        
        feedback.textContent = `${tempEmoji} ${tempText}`;
        feedback.className = feedbackClass;
        hints.textContent = '';
    }
    
    guessInput.value = '';
    guessInput.focus();
}

// Event listeners
guessBtn.addEventListener('click', checkGuess);
guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

resetBtn.addEventListener('click', () => {
    guessBtn.disabled = false;
    guessInput.disabled = false;
    initializeGame();
});

// Start the game
initializeGame();