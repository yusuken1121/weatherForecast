import common from "./common.js";
const {weatherIcon} = common;

const replaceWeatherToIcons = (pData, apiWeatherData)=>{
    if (!pData || !apiWeatherData) {
        console.error("Invalid arguments passed to replaceWeatherToIcons");
        return;
    }
    // judge if pData is used selectorAll or selector
    if (Array.isArray(pData)) {
        pData.forEach( p => {
            if (weatherIcon[apiWeatherData]) {
                p.innerHTML = weatherIcon[apiWeatherData];
            }
        });
    }else{
        pData.innerHTML = weatherIcon[apiWeatherData];
    }
    
};

export default{
    replaceWeatherToIcons
}