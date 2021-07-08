
let requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns']; 

    for (let i = 0; i < towns.length; i++ ) {
      
    if(towns[i].name ==  "Preston"|| towns[i].name ==  "Soda Springs"|| towns[i].name ==  "Fish Haven"){
      
    
      let data = document.createElement('div');
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let motto = document.createElement("p");
      let founded = document.createElement("p");
      let population = document.createElement("p");
      let rain = document.createElement("p");
      let photo = document.createElement('img');

      name.textContent = towns[i].name;
      motto.textContent = towns[i].motto;
      founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
      population.textContent = 'Population: ' + towns[i].currentPopulation;
      rain.textContent = 'Anual Rain Fall: ' + towns[i].averageRainfall;

      photo.setAttribute('src','images/'+`${towns[i].photo}`);
      photo.setAttribute('alt',` ${towns[i].name}!`);
      data.appendChild(name);
      data.appendChild(motto);
      data.appendChild(founded);
      data.appendChild(population);
      card.appendChild(data);
      card.appendChild(photo);

      document.querySelector('div.cards').appendChild(card);
      
    }
    }
  });