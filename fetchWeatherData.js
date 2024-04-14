import fetchWeatherHelper from './fetchWeatherHelper.js';
// Used "let" because the value of `lat` and `lon` will be replaced
let {
    currentLocateWeatherData,
    fiveDaysLocateWeatherData,
    threeHoursLocateWeatherData,
    lat,
    lon
} = fetchWeatherHelper

// geolocationAPI & OpenweatherAPI
const successCallback = async(postion) =>{
    lat = postion.coords.latitude;
    lon = postion.coords.longitude;
    //Current weather
    await currentLocateWeatherData(lat, lon);
    //5days
    await fiveDaysLocateWeatherData(lat, lon);
    //3hours
    await threeHoursLocateWeatherData(lat, lon);
    
};
const errorCallback = async() =>{
    // Setting Vancouver to location
    lat = 49.2827291 
    lon = -123.1207375
    console.error("geolocation : error => set the vancouver location");
    //Current weather
    await currentLocateWeatherData(lat, lon);
    //5days
    await fiveDaysLocateWeatherData(lat, lon);
    //3hours
    await threeHoursLocateWeatherData(lat, lon);
};
navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
