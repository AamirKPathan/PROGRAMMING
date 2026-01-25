const apiKey = "d9fb67b12f00f7562556b5e7757f68be";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityNameEl = document.getElementById("cityName");
const tempEl = document.getElementById("temp");
const descEl = document.getElementById("desc");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("City not found");
      return;
    }
    
    cityNameEl.textContent = data.name;
    tempEl.textContent = Math.round(data.main.temp) + "°C";
    descEl.textContent = data.weather[0].description;
  } catch (err) {
    console.error("Error:", err);
    alert("Could not fetch weather");
  }
}
