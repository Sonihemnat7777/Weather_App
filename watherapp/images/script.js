const apiKey="e6f5c98af605f740c7a7146bb9848031";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city)
{
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data =await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" KM/H";
    if(data.weather[0].main=="Clouds")
    {
        weatherIcon.src="watherapp/clouds.png";
    }
    else if(data.weather[0].main=="Clear")
    {
        weatherIcon.src="watherapp/clear.png";
    }
    
    else if(data.weather[0].main=="Rain")
        {
            weatherIcon.src="watherapp/rain.png";
        }
        
    else if(data.weather[0].main=="Dizzle")
        {
            weatherIcon.src="watherapp/dizzle.png";
        }
        
    else if(data.weather[0].main=="Haze")
        {
            weatherIcon.src="/mist.png";
        }

}
searchBtn.addEventListener("click",()=>
{


    checkWeather(searchBox.value);
})