// IMPORTANT: put your real OpenWeatherMap API key here
const apiKey = "REPLACE_WITH_YOUR_REAL_API_KEY";

const getWeatherBtn = document.getElementById("getWeather");
const cityInput = document.getElementById("cityInput");
const weatherCard = document.getElementById("weatherCard");
const unitToggle = document.getElementById("unitToggle");

let isCelsius = true;

// Toggle °C / °F
unitToggle.addEventListener("change", () => {
  isCelsius = !unitToggle.checked;
});

// Click button
getWeatherBtn.addEventListener("click", () => {
  fetchWeather();
});

// Press Enter in input
cityInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    fetchWeather();
  }
});

async function fetchWeather() {
  const city = cityInput.value.trim();
  if (!city) {
    showError("Please enter a city name.");
    return;
  }

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) {
      throw new Error(data.message || "Unable to fetch weather.");
    }

    displayWeather(data);
  } catch (err) {
    showError(`Error: ${err.message}`);
  }
}

function showError(msg) {
  weatherCard.className = "card";
  weatherCard.innerHTML = `<p>${msg}</p>`;
  weatherCard.classList.remove("hidden");
}

function displayWeather(data) {
  const tempC = data.main.temp;
  const tempF = (tempC * 9/5 + 32).toFixed(1);

  const humidity = data.main.humidity;
  const pressure = data.main.pressure;
  const wind = data.wind.speed;

  const condition = data.weather[0].description;
  const icon = data.weather[0].icon;
  const location = data.name;

  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

  const temp = isCelsius ? `${tempC.toFixed(1)}°C` : `${tempF}°F`;

  let theme = "sunny";
  const c = condition.toLowerCase();

  if (c.includes("cloud")) theme = "cloudy";
  else if (c.includes("rain")) theme = "rainy";
  else if (c.includes("snow")) theme = "snow";
  else if (c.includes("fog") || c.includes("mist") || c.includes("haze")) theme = "fog";

  weatherCard.className = `card ${theme}`;
  weatherCard.innerHTML = `
    <h2>${location}</h2>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${condition}" />
    <p><strong>Temperature:</strong> ${temp}</p>
    <p><strong>Humidity:</strong> ${humidity}%</p>
    <p><strong>Pressure:</strong> ${pressure} hPa</p>
    <p><strong>Wind Speed:</strong> ${wind} m/s</p>
    <p><strong>Condition:</strong> ${condition}</p>
    <p><strong>Sunrise:</strong> ${sunrise}</p>
    <p><strong>Sunset:</strong> ${sunset}</p>
  `;
  weatherCard.classList.remove("hidden");
}
