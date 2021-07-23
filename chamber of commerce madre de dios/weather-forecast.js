const appiURL = "https://api.openweathermap.org/data/2.5/forecast?id=3935619&units=imperial&appid=0e326d95be48b5bfae6bde59d73f8694";

fetch(appiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
      
    let day = 0;
    let dayofweek = ['Sun','mon','tue','Wed','Thu','Fri','Sat'];
    
   const DayForecast = jsObject.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
   console.log(DayForecast);

  

   DayForecast.forEach( x => {
       let d = new Date(x.dt_txt);
       document.getElementById
       document.getElementById(`dayofweek${day+1}`).textContent = dayofweek[d.getDay()];
       document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
       day++

   });
  });