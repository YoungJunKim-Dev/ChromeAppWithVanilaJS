const API_KEY = "0850276a209d3ee7af65d74c8e56c7d4";
const temp = document.querySelector("h3");
let lat = "";
let lon = "";

const doSomething = (latitude, longitude) => {
  lat = latitude;
  lon = longitude;
  temp.textContent = `${latitude}, ${longitude}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${"metric"}&appid=${API_KEY}`;
  fetch(url).then((res) => res.json().then((data) => weatherInfo(data)));
};

const weatherInfo = (data) => {
  temp.textContent = `${data.name} ${data.main.temp}°C ${data.weather[0].main}`;
};

navigator.geolocation.getCurrentPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
