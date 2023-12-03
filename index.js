const search_btn =  document.querySelector('.search-image');
const input_Value = document.querySelector('.input');

function fetchWeather(){
    if (input_Value.value === '') {
        alert('Enter the correct city name.');
    } else{
        displayWeather(input_Value.value);
    }
}

async function displayWeather(cityName) {
    
}


search_btn.addEventListener('click', fetchWeather);

