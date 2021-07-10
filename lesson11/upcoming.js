const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

    const towns = jsonObject['towns']; 
    const event = jsonObject['events'];
    for (let i = 0; i < towns.length; i++ ){
        if(towns[i].name ==  "Preston"|| towns[i].name ==  "Soda Springs"|| towns[i].name ==  "Fish Haven"){
          
            
          
            document.getElementById('humidity-preston').textContent = jsObject.events.toFixed(0);
            document.getElementById('wind-speed').textContent = jsObject.wind.s.toFixed(0);
            document.getElementById('current-temp').textContent = jsObject.main.temp.toFixed(0);
            document.getElementById('currently').textContent = jsObject.weather[0].main;
        
            
            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
        
         
      
            
        }
    }
  });
