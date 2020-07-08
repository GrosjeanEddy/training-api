var input = document.querySelector('.input_text');
var pName = document.querySelector('#name');
var pCapital = document.querySelector('.capital');
var pFlag = document.querySelector('.flag');
var pLanguage = document.querySelector('.language');
var pMoney = document.querySelector('.money');
var pSymbol = document.querySelector('.symbol');
var pPopulation = document.querySelector('.population');
var pRegion = document.querySelector('.region');
var button = document.querySelector('.submit');

const err_msg = "Unknow country";

function getInfo(){
    fetch("https://restcountries.eu/rest/v2/name/"+input.value)
    .then(response => response.json())
    .then(data => {
        
        var capital = data[0].capital;
        var pays = data[0].name;
        var flag = data[0].flag;
        var language = data[0].languages[0].name;
        var money = data[0].currencies[0].name;
        var symbol = data[0].currencies[0].symbol;
        var population = data[0].population;
        var region = data[0].region;

        console.log(data);
        
        pName.innerHTML = pays;
        pCapital.innerHTML = "Capital : "+ capital;
        pFlag.innerHTML = "<img src="+ flag +">";
        pLanguage.innerHTML = "Language : "+ language;
        pMoney.innerHTML = "Currencies : "+ money + ' ' + symbol;
        pPopulation.innerHTML = "Population : "+ population;
        pRegion.innerHTML = "Region : "+ region;
        input.value = "";
    })

    .catch(err => alert(err_msg));
    
}

button.addEventListener('click', getInfo);

input.addEventListener('keypress', function(event) {
    if(event.key == 'Enter') {
        getInfo();
    }
})

