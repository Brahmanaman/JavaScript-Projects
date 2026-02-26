let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_icon = document.querySelector(".weather_icon");
let w_temperature = document.querySelector(".weather_temperature");
let w_min = document.querySelector(".weather_min");
let w_max = document.querySelector(".weather_max");

// to get the country name 
//internationalization api in js used to conver sort country name in full name
const getCountryName = (code) => {
     return new Intl.DisplayNames([code], { type: "region" }).of(code);
}

//get datetime
const getDateTime = (dt) =>{
     let dtInMilliSec = dt * 1000;
     const options = {
          weekday : "long",
          year : "numeric", 
          month : "long",
          day : "numeric",
          hour : "numeric", 
          minute : "numeric",
          second : "numeric"
     }
     return new Intl.DateTimeFormat("en-us", options).format(dtInMilliSec);
}

const getWeatherData = async () =>{
     const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=noida&appid=b1f7f5ce9f35e29004b7b5d971130b4d`;
     try{ 
          const res = await fetch(weatherUrl);
          const data = await res.json();
          const {main, name, weather, wind, sys, dt} = data;
          cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`;
          dateTime.innerHTML = `${getDateTime(dt)}`;
     }
     catch(error){
          console.log(error);
     }
}

document.body.addEventListener('load', getWeatherData());

