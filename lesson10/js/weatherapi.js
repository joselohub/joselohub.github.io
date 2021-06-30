const cityid = "5604473";
const APIID = "0e326d95be48b5bfae6bde59d73f8694";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=0e326d95be48b5bfae6bde59d73f8694";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('current-temp').textContent = jsObject.main.temp.toFixed(0);
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
  });