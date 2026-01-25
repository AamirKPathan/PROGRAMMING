// WEATHER APP
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput")
const card = document.querySelector(".card")
const apiKey = "36b9c3d5978540f659c374378104b089";

weatherForm.addEventListener("submit", event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){

    }
    else{
        displayError("Please e")
    }

});

async function getWeatherData(city){

}

function displayWeatherInfo(data){

}

function getWeatherEmoji(weatherId){

}

function displayError(message){

}