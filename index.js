const search_btn = document.querySelector(".search-image");
const input_Value = document.querySelector(".input");
const temperature = document.querySelector(".temp");
const city_Name = document.querySelector(".city-name");
const humidity_perc = document.querySelector(".humidity-perc");
const wind_speed = document.querySelector(".wind-speed");
const image_weather = document.querySelector(".image-weather");

function main() {
  if (input_Value.value === "") {
    alert("Enter the correct city name.");
  } else {
    fetchApi(input_Value.value);
  }
}

async function fetchApi(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ed9762be5575457144a931c00af77267&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  showInFrontEnd(data);
}

function showInFrontEnd(weather) {
  imageWeather(weather);
  temperature.textContent = `${weather.main.temp}°c`;
  city_Name.textContent = `${weather.name}`;
  humidity_perc.textContent = `${weather.main.humidity}%`;
  wind_speed.textContent = `${weather.wind.speed}km/h`;
  input_Value.value = "";
}

function imageWeather(data) {
  if (data.weather[0].main === "Clear") {
    image_weather.src = "./images/clear.png";
  }
  else if(data.weather[0].main === "Rain"){
    image_weather.src = "./images/rain.png";
  }
  else if(data.weather[0].main === "Mist"){
    image_weather.src = "./images/mist.png";
  }
  else if(data.weather[0].main === "Clouds"){
    image_weather.src = "./images/clouds.png";
  }
  else if(data.weather[0].main === "Drizzle"){
    image_weather.src = "./images/drizzle.png";
  }
  else if(data.weather[0].main === "Snow"){
    image_weather.src = "./images/snow.png";
  }
}

window.addEventListener("load", function () {
  fetchApi("karachi");
});

search_btn.addEventListener("click", main);
