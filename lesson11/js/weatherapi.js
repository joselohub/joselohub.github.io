const cityid = "5604473";
const APIID = "0e326d95be48b5bfae6bde59d73f8694";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=0e326d95be48b5bfae6bde59d73f8694";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
  
    document.getElementById('humidity-preston').textContent = jsObject.main.humidity.toFixed(0);
    document.getElementById('wind-speed').textContent = jsObject.wind.speed.toFixed(0);
    document.getElementById('current-temp').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('currently').textContent = jsObject.weather[0].main;

    
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array

  }); 



  
  
  const fishURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=0e326d95be48b5bfae6bde59d73f8694";
fetch(fishURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
  
    document.getElementById('humidity-fish-haven').textContent = jsObject.main.humidity.toFixed(0);
    document.getElementById('fish-wind-speed').textContent = jsObject.wind.speed.toFixed(0);
    document.getElementById('fish-current-temp').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('fish-currently').textContent = jsObject.weather[0].main;

    
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array

  });