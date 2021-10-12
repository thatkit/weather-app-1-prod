import React, { useState, useEffect } from 'react';

export const App = () => {
    const [weather, setWeather] = useState({
        main: {
            temp: 0
        }
    });
    
    const getData = async () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(async ({ coords }) => {
                const lat = coords.latitude;
                const lon = coords.longitude;
                        
                const apiURL = `/${lat}/${lon}`;
                const res = await fetch(apiURL);
                const json = await res.json();
                // console.log(json);
                setWeather(json);

                return null;
            });
        } else {
            console.log('geolocation IS NOT available');
        }
    }    
    
    useEffect(() => {
        getData();
    }, []);
    
    return (
        <div>
            <h1>Weather App</h1>
            <h2>Build with React.js, Express.js with Open Weather API</h2>
            <div>
                <p>
                    {weather.main.temp}
                </p>
            </div>
        </div>
    )
}
