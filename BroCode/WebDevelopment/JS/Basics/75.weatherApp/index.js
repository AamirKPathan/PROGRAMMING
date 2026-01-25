const apiKey = "d9fb67b12f00f7562556b5e7757f68be";

let tempC = null;
let isCelsius = true;

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const toggleBtn = document.getElementById("unitToggle");

const cityNameEl = document.getElementById("cityName");
const tempEl = document.getElementById("temperature");
const descEl = document.getElementById("description");

searchBtn.addEventListener("click", getWeather);
toggleBtn.addEventListener("click", toggleUnit);

async function getWeather() {
  const city = cityInput.value.trim();
  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url =
    `https://api.openweathermap.org/data/2.5/weather` +
    `?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data); // 👈 DEBUG OUTPUT

    if (response.ok === false) {
      alert(data.message);
      return;
    }

    tempC = data.main.temp;
    isCelsius = true;

    cityNameEl.textContent = data.name;
    descEl.textContent = data.weather[0].description;

    updateTemperature();

  } catch (error) {
    console.error(error);
    alert("Error fetching weather data");
  }
}

function toggleUnit() {
  if (tempC === null) return;
  isCelsius = !isCelsius;
  updateTemperature();
}

function updateTemperature() {
  if (isCelsius) {
    tempEl.textContent = Math.round(tempC) + "°C";
    toggleBtn.textContent = "°F";
  } else {
    const tempF = tempC * 9 / 5 + 32;
    tempEl.textContent = Math.round(tempF) + "°F";
    toggleBtn.textContent = "°C";
  }
}
