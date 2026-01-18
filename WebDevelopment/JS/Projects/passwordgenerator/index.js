const passwordDisplay = document.getElementById('passwordDisplay');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const resetBtn = document.getElementById('resetBtn');
const passwordLength = document.getElementById('passwordLength');
const lengthValue = document.getElementById('lengthValue');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const feedback = document.getElementById('feedback');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:\'"<>,.?/';

// Update length display
passwordLength.addEventListener('input', () => {
    lengthValue.textContent = passwordLength.value;
});

// Generate password
function generatePassword() {
    let availableChars = '';
    let password = '';
    
    // Build character set based on checkboxes
    if (uppercase.checked) availableChars += uppercaseChars;
    if (lowercase.checked) availableChars += lowercaseChars;
    if (numbers.checked) availableChars += numberChars;
    if (symbols.checked) availableChars += symbolChars;
    
    // Check if at least one option is selected
    if (availableChars.length === 0) {
        showFeedback('Please select at least one character type!', 'error');
        return;
    }
    
    // Generate password
    const length = parseInt(passwordLength.value);
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }
    
    passwordDisplay.value = password;
    showFeedback('Password generated!', 'success');
}

// Copy to clipboard
function copyPassword() {
    if (!passwordDisplay.value) {
        showFeedback('Generate a password first!', 'error');
        return;
    }
    
    navigator.clipboard.writeText(passwordDisplay.value).then(() => {
        showFeedback('Password copied to clipboard!', 'success');
    }).catch(() => {
        showFeedback('Failed to copy password', 'error');
    });
}

// Reset form
function reset() {
    passwordDisplay.value = '';
    passwordLength.value = '16';
    lengthValue.textContent = '16';
    uppercase.checked = true;
    lowercase.checked = true;
    numbers.checked = true;
    symbols.checked = true;
    feedback.textContent = '';
    feedback.className = 'feedback';
}

// Show feedback message
function showFeedback(message, type) {
    feedback.textContent = message;
    feedback.className = `feedback ${type}`;
    setTimeout(() => {
        feedback.textContent = '';
        feedback.className = 'feedback';
    }, 3000);
}

// Event listeners
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);
resetBtn.addEventListener('click', reset);

// Generate password on page load
window.addEventListener('load', generatePassword);