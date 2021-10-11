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
                console.log(json);
                return json;
            });
        } else {
            console.log('geolocation IS NOT available');
        }
    }

    const data = getData();
    setWeather(data);
    
    useEffect(() => {
        getData();
    }, []);
    
    return (
        <div>
            <h1>bitch hi</h1>
            <div>
                <p>
                    {weather.main.temp}
                </p>
            </div>
        </div>
    )
}
