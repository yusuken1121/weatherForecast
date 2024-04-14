import common from './common.js';
const {weatherIcon} = common;

import fetchWeatherHelper from './fetchWeatherHelper.js';
// Used "let" because the value of `lat` and `lon` will be replaced
let {
    currentLocateWeatherData,
    fiveDaysLocateWeatherData,
    threeHoursLocateWeatherData,
} = fetchWeatherHelper

import data from './replaceWeatherToIcon.js';
const {replaceWeatherToIcons} = data



document.getElementById('cityForm').addEventListener('submit', function(e) {
    e.preventDefault();

    localStorage.removeItem('currentLocation');

    let _city_address = document.getElementById('cityInput').value;
    // ex. "London, UK" → "London,+UK"
    let city_address = _city_address.replace(/, /g, '+');
    const GOOGLE_MAP_API_KEY = 'AIzaSyDxOnFXfb45Innogm5hZFfMaBfZ_QNzojg';
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city_address}&key=${GOOGLE_MAP_API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status === "OK") {
                let location = data.results[0].geometry.location;
                let locationData = {
                    city_address: _city_address,
                    lat: location.lat,
                    lng: location.lng
                };
                localStorage.setItem('currentLocation', JSON.stringify(locationData));

                clickFormWeatherData();
                

            } else {
                throw new Error('Geocoding API response status is not OK');
            }
        })
        .catch(error => console.error('Error:', error));
});

// the case a user click the form 
const clickFormWeatherData = async () =>{
    const storageCityData = window.localStorage.getItem("currentLocation");
    if (!storageCityData) {
        console.error("No location data in storage.");
        return;
    }
    const parsedCityData = JSON.parse(storageCityData);
    let lat = parsedCityData["lat"];
    let lon = parsedCityData["lng"];

    try{
        await currentLocateWeatherData(lat,lon);
        await fiveDaysLocateWeatherData(lat,lon);
        await threeHoursLocateWeatherData(lat,lon);
        replaceWeatherToIcons();
    }catch(error){
        console.error("Failed to fetch weather data:", error)
    }
}