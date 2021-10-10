export const fetchWeatherData = async city => {   
    const apiURL = `/weather/${city}`;

    const res = await fetch(apiURL);
    const json = await res.json();
    console.log(json);

    return json;
    
}