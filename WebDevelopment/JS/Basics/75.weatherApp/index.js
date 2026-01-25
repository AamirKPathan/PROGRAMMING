const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
const getWeatherBtn = document.getElementById("getWeather");
const cityInput = document.getElementById("cityInput");
const weatherCard = document.getElementById("weatherCard");
const unitToggle = document.getElementById("unitToggle");

let isCelsius = true;

unitToggle.addEventListener("change", () => {
  isCelsius = !unitToggle.checked;
});

getWeatherBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.cod !== 200) throw new Error(data.message);
    displayWeather(data);
  } catch (err) {
    weatherCard.innerHTML = `<p>Error: ${err.message}</p>`;
    weatherCard.className = "card";
    weatherCard.classList.remove("hidden");
  }
});

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
  if (condition.includes("cloud")) theme = "cloudy";
  else if (condition.includes("rain")) theme = "rainy";

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
}
