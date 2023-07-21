const key = "";

const cityRef = document.getElementById('city');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

let getWeather = () => {
    let city = cityRef.value;
    if(city.length == 0){
        result.innerHTML = `<h2 id='msg'>Enter city name to search</h2>`;
    }
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
        fetch(url)
        .then(resp => resp.json())
        .then(obj => {
            result.innerHTML = `<h2>${obj.name}</h2>
            <h4 class="weather">${obj.weather[0].main}</h4>
            <h4 class="weather">${obj.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${obj.weather[0].icon}.png">
            <h1>${obj.main.temp}&#176;</h1>
            <div id='temp-container'>
                <div>
                    <h4 class="title">min</h4>
                    <h4 class='temp'>${obj.main.temp_min}</h4>
                </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class='temp'>${obj.main.temp_max}</h4>
            </div>
            </div>`
            cityRef.value = "";
        })
        .catch(()=>{
            result.innerHTML = `<h2 id='msg'>Enter valid city name</h2>`;
            cityRef.value = "";
        });
    }
};
btn.addEventListener('click',getWeather);
