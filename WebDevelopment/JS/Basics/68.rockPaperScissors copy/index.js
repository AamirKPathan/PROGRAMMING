// Score variables
let wins = 0;
let losses = 0;
let ties = 0;

// DOM elements
const buttons = document.querySelectorAll(".choice");
const playerChoiceText = document.getElementById("player-choice");
const computerChoiceText = document.getElementById("computer-choice");
const resultText = document.getElementById("result-text");

const winsText = document.getElementById("wins");
const lossesText = document.getElementById("losses");
const tiesText = document.getElementById("ties");

const resetBtn = document.getElementById("reset-btn");

// Button click events
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        const result = getWinner(playerChoice, computerChoice);

        playerChoiceText.textContent = playerChoice;
        computerChoiceText.textContent = computerChoice;
        resultText.textContent = result;

        updateScore(result);
    });
});

// Random computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Determine winner
function getWinner(player, computer) {
    if (player === computer) return "It's a tie!";

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You win!";
    }

    return "You lose!";
}

// Update scoreboard
function updateScore(result) {
    if (result === "You win!") wins++;
    else if (result === "You lose!") losses++;
    else ties++;

    winsText.textContent = wins;
    lossesText.textContent = losses;
    tiesText.textContent = ties;
}

// Reset scoreboard
resetBtn.addEventListener("click", () => {
    wins = 0;
    losses = 0;
    ties = 0;

    winsText.textContent = wins;
    lossesText.textContent = losses;
    tiesText.textContent = ties;
});
