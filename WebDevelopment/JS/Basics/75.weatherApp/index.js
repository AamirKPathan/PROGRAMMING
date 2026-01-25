const apiKey = "YOUR_API_KEY_HERE"; // <-- Put your OpenWeatherMap API key here

const button = document.getElementById("btn");

button.addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("city").value;
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

    document.getElementById("location").textContent = data.name;
    document.getElementById("temperature").textContent =
      Math.round(data.main.temp) + "°C";
    document.getElementById("description").textContent =
      data.weather[0].description;

    setWeatherTheme(data.weather[0].main.toLowerCase());
  } catch (error) {
    alert("Error fetching weather data");
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
