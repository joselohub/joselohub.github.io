let appiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=0e326d95be48b5bfae6bde59d73f8694";
fetch(appiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    const dayofweek = ['Sun','mon','tue','Wed','Thu','Fri','Sat'];
    const fiveDayForecast = jsObject.list.filter( forecast => forecast.dt_txt.includes('12:00:00'));
    console.log(fiveDayForecast);
    
    
    fiveDayForecast.forEach( x => {
        let d = new Date(x.dt_txt);
        console.log(d);
        document.getElementById(`dayofweek${day+1}`).textContent = dayofweek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = x.main.temp; 
        day++
    }); 

  });  
   