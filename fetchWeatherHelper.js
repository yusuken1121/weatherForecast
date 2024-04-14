// import
import common from './common.js';
const {openWeatherApiKey, wmoCodeList, weatherIcon} = common;

import data from './replaceWeatherToIcon.js';
const {replaceWeatherToIcons} = data

//grobal variable
let lat, lon;

//get the current weather by lat and lon
const currentLocateWeatherData = async(lat, lon) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}#`;

    try {
        
        const res = await fetch(url);
        const data = await res.json();
        //City name
        const cityName = document.querySelector("#cityname");
        cityName.innerHTML = data.name;
        //temp
        const temperature = document.querySelector("#c");
        temperature.innerHTML= Math.floor(data.main.temp - 273.15) + "C";
        //current weather
        const pWeather = document.querySelector(".weatherinfo p");
        replaceWeatherToIcons(pWeather, data.weather[0].main);

    } catch (error) {
        console.error("error", error);

    };
};

//get the five days weather by lat and lon
const fiveDaysLocateWeatherData = async(lat, lon) =>{
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&timezone=PST&longitude=${lon}&forecast_days=5&daily=weather_code,temperature_2m_max`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        const fiveDaysWeahterInfo = document.querySelectorAll(".section2 li");

        fiveDaysWeahterInfo.forEach((info,index) => {
            //If an li element contains more than two p tags, remove all except the first p tag.
            const pTag = info.querySelectorAll("p");
            if (pTag.length !== 1) {
                pTag.forEach((p,index) => {
                    if (index > 0) {
                        p.remove();
                    }
                });
            }
            //day formatted "MM-DD"
            const dateData = data.daily.time[index];
            let formatedDateData = dateData.slice(5);
            if (formatedDateData[0] === "0") {
                formatedDateData = formatedDateData.slice(1);            
            }
            info.querySelector("p").innerText = formatedDateData;
            
            //weather
            const pWeather = document.createElement("p");
            const wmoCode = data.daily.weather_code[index];
            const dayWeather = wmoCodeList[String(`${wmoCode}`)];
            replaceWeatherToIcons(pWeather,dayWeather);
            info.querySelector("p").after(pWeather);

            //temperature
            const temperature = document.createElement("p");
            const dayTemperature = data.daily.temperature_2m_max[index];
            temperature.textContent =  dayTemperature + "C";
            info.querySelector("p").after(temperature);
            
        
            
            
        });
    } catch (error) {
        console.error("error");
    }
};

//get the three hours weather by lat and lon
const threeHoursLocateWeatherData = async(lat, lon) =>{
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        const threeHoursWeahterInfo = document.querySelectorAll(".section3 li");
        //If an li element contains more than two p tags, remove all except the first p tag.
        threeHoursWeahterInfo.forEach((info,index) => {
            const pTag = info.querySelectorAll("p");
            if (pTag.length !== 1) {
                pTag.forEach((p,index) => {
                    if (index > 0) {
                        p.remove();
                    }
                });
            }

            //weather
            const pWeather = document.createElement("p");
            replaceWeatherToIcons(pWeather, data.list[index].weather[0].main);
            info.querySelector("p").after(pWeather);

            //temperature
            const temperature = document.createElement("p");
            temperature.textContent =  Math.floor(data.list[index].main.temp - 273.15) + "C";
            info.querySelector("p").after(temperature);
        });

    } catch (error) {
        console.error("error", error);
    }
};

export default {
    currentLocateWeatherData,
    fiveDaysLocateWeatherData,
    threeHoursLocateWeatherData,
    lat,
    lon
}