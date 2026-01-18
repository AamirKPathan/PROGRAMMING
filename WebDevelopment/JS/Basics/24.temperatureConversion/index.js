const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

// Convert from Celsius
function convertFromCelsius() {
    const celsius = parseFloat(celsiusInput.value);
    
    if (isNaN(celsius)) {
        alert('Please enter a valid number');
        return;
    }
    
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    
    fahrenheitInput.value = fahrenheit.toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);
}

// Convert from Fahrenheit
function convertFromFahrenheit() {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    
    if (isNaN(fahrenheit)) {
        alert('Please enter a valid number');
        return;
    }
    
    const celsius = (fahrenheit - 32) * 5/9;
    const kelvin = celsius + 273.15;
    
    celsiusInput.value = celsius.toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);
}

// Convert from Kelvin
function convertFromKelvin() {
    const kelvin = parseFloat(kelvinInput.value);
    
    if (isNaN(kelvin)) {
        alert('Please enter a valid number');
        return;
    }
    
    if (kelvin < 0) {
        alert('Kelvin cannot be negative');
        return;
    }
    
    const celsius = kelvin - 273.15;
    const fahrenheit = (celsius * 9/5) + 32;
    
    celsiusInput.value = celsius.toFixed(2);
    fahrenheitInput.value = fahrenheit.toFixed(2);
}

// Reset all inputs
function resetAll() {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
    celsiusInput.focus();
}

// Allow Enter key to trigger conversion
celsiusInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') convertFromCelsius();
});

fahrenheitInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') convertFromFahrenheit();
});

kelvinInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') convertFromKelvin();
});
