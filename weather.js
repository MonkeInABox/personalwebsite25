const apiKey = 'cebb63c5b7c3951c0e4ef32230cd491d';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather';

window.onload = fetchWeatherData.bind(null, "Perth");
 


function fetchWeatherData(city) {
  const weatherURL = `${apiURL}?q=${city}&appid=${apiKey}&units=metric`;
  const tempElem = document.getElementById("temp");
  fetch(weatherURL)
    .then((response) => response.json())
    .then((data) => {
      tempElem.innerHTML = `${data.main.temp}°C`;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

