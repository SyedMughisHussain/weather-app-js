const search_btn = document.querySelector(".search-image");
const input_Value = document.querySelector(".input");

function fetchWeather() {
  if (input_Value.value === "") {
    alert("Enter the correct city name.");
  } else {
    displayWeather(input_Value.value);
  }
}

async function displayWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ed9762be5575457144a931c00af77267`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  const serchBar = document.querySelector(".serchBar");
  const newEle = document.createElement("div");
  newEle.classList.add("all-data");
  newEle.innerHTML = `
    <img src="./images/clear.png" class="image-weather" alt="random-image">
                <p class="temp">7°c</p>
                <p class="city-name">Karachi</p>
                <div class="last">
                    <div class="left">
                        <img src="./images/humidity.png" class="humidity-image" alt="humidity">
                        <p class="humidity-perc">48%</p>
                    </div>
                    <div class="right">
                        <img src="./images/wind.png" class="wind-image" alt="Wind">
                        <p class="wind-speed">10.29 km/h</p>
                    </div>
                </div>
                <div class="text">
                    <p>Humidity</p>
                    <p>Wind Speed</p>
                </div>
    `;
    serchBar.after(newEle);
    input_Value.value = '';

}

search_btn.addEventListener("click", fetchWeather);
