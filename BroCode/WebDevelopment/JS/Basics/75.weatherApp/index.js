// WEATHER APP
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput")
const card = document.querySelector(".card")
const apiKey ="36b9c3d5978540f659c374378104b089";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city")
    }

});

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    console.log(response)
    if(!response.ok){
        throw new Error("Could not fetch weather data")
    }

    return await response.json();
}

function displayWeatherInfo(data){
    const{name: city,
        main: {temp, humidity},
        weather: [{description, id}]} = data

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;

    card.appen
}

function getWeatherEmoji(weatherId){

}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    
    card.textContent = ""
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}