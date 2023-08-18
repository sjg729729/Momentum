const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
// const API_KEY = "e7af7f6dedcb0e0df4a8a9b3ba3930b4";
const API_KEY = config.apikey;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `${data.name}`;
      weather.innerText = `${data.weather[0].main} • ${data.main.temp}°C •`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
