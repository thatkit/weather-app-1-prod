export const fetchWeatherData = async city => {
    const key = '88a66e9b11d1bdbf7f615d2d2e716ffa';
    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    const res = await fetch(endpoint);
    const json = await res.json();
    console.log(json);

    return json;
    
}