const apiKey = "18b0471602c0cc7136647a8ec13d8de4";

function geoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather p:last-child");
      const city = document.querySelector("#weather p:first-child");
      const temp = document.querySelector("#weather p:nth-child(2)");
      city.innerText = data.name + "/"+data.sys.country;
      weather.innerText =data.weather[0].main;
      temp.innerText = data.main.temp+ " ℃"
      console.log(data.sys.country);
    });
}
function geoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);
