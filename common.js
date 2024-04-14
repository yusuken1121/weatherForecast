// global variable
const openWeatherApiKey = "cd866b67013774781a131a5a6cb701c4";

// for converting WMO code to weather
const wmoCodeList = {
    "0": "Clear",
    "1": "Clouds",
    "2": "Clouds",
    "3": "Clouds",
    "45": "Fog",
    "48": "Fog",
    "51": "Drizzle",
    "53": "Drizzle",
    "55": "Drizzle",
    "56": "Drizzle",
    "57": "Drizzle",
    "61": "Rain",
    "63": "Rain",
    "65": "Rain",
    "66": "Rain",
    "67": "Rain",
    "71": "Snow",
    "73": "Snow",
    "75": "Snow",
    "77": "Snow",
    "80": "Rain",
    "81": "Rain",
    "82": "Rain",
    "85": "Snow",
    "86": "Snow",
    "95": "Thunderstorm",
    "96": "Thunderstorm",
    "99": "Thunderstorm"
};


const weatherIcon =
{
    "Clouds": "☁️",
    "Clear": "☀️",
    "Rain": "☔️",
    "Clouds": "☁️",
    "Snow":"⛄️",
    "Thunderstorm":"⚡️",
    "Drizzle":"☔️",
    "Mist": "🌁",      
    "Smoke": "💨",     
    "Haze": "🌫️",      
    "Dust": "🌪️",      
    "Fog": "🌁",       
    "Sand": "🏜️",      
    "Ash": "🌋",        
    "Squall": "🌬️",     
    "Tornado": "🌪️"
};


export default {
    openWeatherApiKey,
    wmoCodeList,
    weatherIcon,
};