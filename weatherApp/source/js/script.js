// Random Color 
let $ = document;
let bodyDoc = $.body;
let redColor,greenColor,blueColor;
let titelH1 = $.querySelector(".titel");
setInterval(()=>{
    redColor = Math.floor(Math.random() * 255);
    greenColor = Math.floor(Math.random() * 255);
    blueColor = Math.floor(Math.random() * 255);
    let randomColor = 'rgb('+ redColor + ',' + greenColor + ',' + blueColor +')';
    bodyDoc.style.backgroundColor = randomColor ;
    titelH1.style.color = randomColor;
},5000);
// Weather App
let btnSearch = $.querySelector(".search-btn");
let searchBar = $.querySelector(".search-bar");
let divWeather = $.querySelector(".weather");
let erorText = $.querySelector(".eror");
let cardBox = $.querySelector(".card");

let DataWeatherCities = {
    Tehran:{temp:51, city:"Tehran", description:"Cloudy", humidity:30, windSpeed:6.2 },
    Tabriz:{temp:40, city:"Tabriz", description:"Rainy", humidity:40, windSpeed:3.5 },
    Gom:{temp:10, city:"Gom", description:"Sunny", humidity:10, windSpeed:1.2 },
    Gilan:{temp:58, city:"Gilan", description:"Snowing", humidity:50, windSpeed:4.2 },
    Mashhad:{temp:30, city:"Mashhad", description:"Freezing", humidity:25, windSpeed:4.6 },
    Istanbul:{temp:26, city:"Istanbul", description:"Partly cloudy", humidity:35, windSpeed:5.2 },
    Ankara:{temp:25, city:"Ankara", description:"Partly cloudy", humidity:15, windSpeed:4.2 },

}
btnSearch.addEventListener('click',()=>{
    let searchBarValue = searchBar.value;
    let mainCityDatas = DataWeatherCities[searchBarValue];
    if (mainCityDatas) {
        divWeather.classList.remove("loading");  
        $.querySelector(".city").innerHTML = 'Weather in ' + mainCityDatas.city;
        $.querySelector(".temp").innerHTML = mainCityDatas.temp + " °C";
        $.querySelector(".description").innerHTML = mainCityDatas.description;
        $.querySelector(".humidity").innerHTML = 'Humidity: ' + mainCityDatas.humidity + '%';
        $.querySelector(".wind").innerHTML = 'Wind speed: ' + mainCityDatas.windSpeed + ' km/h';
        cardBox.style.border = "";
        erorText.style.display = "";
    }else {
        divWeather.classList.add("loading");
        cardBox.style.border = "3px solid red";
        erorText.style.display = "inline";
    }

});