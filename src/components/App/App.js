import React, { useState, useEffect } from 'react';

import { fetchWeatherData } from '../../fetch'

export const App = () => {
    const [weather, setWeather] = useState({
        main: {
            temp: 0
        }
    });
    
    const getData = async () => {
        const weatherData = await fetchWeatherData('Vladivostok');
        setWeather(weatherData);
    }

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
