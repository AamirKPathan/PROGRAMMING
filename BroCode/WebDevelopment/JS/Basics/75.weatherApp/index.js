const apiKey = "d9fb67b12f00f7562556b5e7757f68be";

let currentTempC = null;
let isCelsius = true;

const button = document.getElementById("btn");
const toggleBtn = document.getElementById("unitToggle");

button.addEventListener("click", getWeather);
toggleBtn.addEventListener("click", toggleUnit);

async function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) return alert("Enter a city name");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("City not found");
      return;
    }

    currentTempC = data.main.temp;
    isCelsius = true;

    document.getElementById("location").textContent = data.name;
    document.getElementById("description").textContent =
      data.weather[0].description;

    updateTemperature();
    setWeatherTheme(data.weather[0].main.toLowerCase());
  } catch {
    alert("Error fetching weather");
  }
}

function toggleUnit() {
  if (currentTempC === null) return;

  isCelsius = !isCelsius;
  updateTemperature();
}

function updateTemperature() {
  const tempEl = document.getElementById("temperature");

  if (isCelsius) {
    tempEl.textContent = Math.round(currentTempC) + "°C";
    toggleBtn.textContent = "°F";
  } else {
    const tempF = currentTempC * 9 / 5 + 32;
    tempEl.textContent = Math.round(tempF) + "°F";
    toggleBtn.textContent = "°C";
  }
}

function setWeatherTheme(weather) {
  document.body.className = "";

  if (weather.includes("clear")) document.body.classList.add("clear");
  else if (weather.includes("cloud")) document.body.classList.add("clouds");
  else if (weather.includes("rain") || weather.includes("drizzle"))
    document.body.classList.add("rain");
  else if (weather.includes("snow")) document.body.classList.add("snow");
  else if (weather.includes("thunder"))
    document.body.classList.add("thunderstorm");
  else document.body.classList.add("mist");
}
