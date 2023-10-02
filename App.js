
//DISPLAYIG REAL-TIME TIME
    function formatDate(date) {
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];  
      let day = days[now.getDay()];
      let hours = now.getHours();{
        if(hours<10){
          hours=`0${hours}`;
        }
      }
      let minutes = now.getMinutes();
        if(hours<10){
          hours=`0${minutes}`;
        }
              return `${day} ${hours}: ${minutes}`;
      }
      let display = document.querySelector("#display-time");
       let now = new Date();
       display.innerHTML = formatDate(now)



function searchCity(city) {
  let apiKey = "ef536c135f931c48635e435d71067995";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showWeatherData);
}

function handleSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let city = searchInput.value;
  if (city) {
    searchCity(city);
  } else {
    alert("Please type a city");
  }
}

function showWeatherData(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
  document.querySelector("#pressure").innerHTML = Math.round(
    response.data.wind.pressure
  );
  document.querySelector("#description").innerHTML = response.data.weather[0].main;
}

function searchLocation(position) {
  let apiKey = "ef536c135f931c48635e435d71067995";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showWeatherData);
}

function getCurrentLocation(event) {
  event.preventDefault();
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(searchLocation);
  } else {
    alert("Geolocation is not available in this browser.");
  }
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#currentbtn");
currentLocationButton.addEventListener("click", getCurrentLocation);

// Load default city (Mumbai) on page load
searchCity("Mumbai");

//SWITCHING TEMPERATURES BETWEEN FAHRENHEIT AND CEKCIUS
  function switchFahrenheit(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#temperature");
  let temperature=currentTemp.innerHTML;
  temperature=Number(temperature);//convertig from string
  currentTemp.innerHTML=Math.round((temperature * 9) / 5 + 32);
  }
  let fahrenheitLink = document.querySelector("#Fahrenheit-link");
  fahrenheitLink.addEventListener("click", switchFahrenheit);

  function switchCelcius(event) {  
  event.preventDefault();
  let currentTemp = document.querySelector("#temperature");
  let temperature=currentTemp.innerHTML;
  temperature=Number(temperature);//convertig from string
  currentTemp.innerHTML = Math.round((temperature - 32) * 5 / 9); // Convert to Celsius
  }
let celciusLink = document.querySelector("#celcius-link");
  celciusLink.addEventListener("click", switchCelcius);


  
