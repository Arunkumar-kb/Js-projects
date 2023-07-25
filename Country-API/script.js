let countryInp = document.querySelector('.country-Inp');
let searchBtn = document.querySelector('.search-btn');
let result = document.querySelector('.result');

let countryResult = function() {
    let country = countryInp.value;
    if(country.length == 0){
        result.innerHTML = `<h3 class='msg'>Enter a country name to search</h3>`;
    }
    else{
        const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`
        fetch(url).then((response) => response.json())
        .then((data) => {
            result.innerHTML = `<img src="${data[0].flags.svg}" alt="flag-image" class="flag">
            <h2>${country}</h2>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>capital :</h4>
                    <span>${data[0].capital[0]}</span>
                </div>
                <div class="data-wrapper">
                    <h4>continents :</h4>
                    <span>${data[0].region}</span>
                </div>
                <div class="data-wrapper">
                    <h4>population :</h4>
                    <span>${data[0].population}</span>
                </div>
                <div class="data-wrapper">
                    <h4>currency :</h4>
                    <span>${Object.values(data[0].currencies)[0].name}</span>
                </div>
                <div class="data-wrapper">
                    <h4>languages : </h4>
                    <span>${Object.values(data[0].languages).toString().split(',').join(', ')}</span>
                </div>
            </div>`;
             countryInp.value= "";
        }).catch(()=>{
            result.innerHTML = `<h3 class='msg'>Enter a correct country name</h3>`;
            countryInp.value= "";
        })
    }
}
searchBtn.addEventListener('click',countryResult);