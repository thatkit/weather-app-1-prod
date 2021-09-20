import React, { useState } from 'react';

import { fetchWeatherData } from '../../fetch'

export const App = () => {
    const [weather, setWeather] = useState({
        main: {
            temp: 0
        }
    }, []);
    
    const getData = async () => {
        const weatherData = await fetchWeatherData('Vladivostok');
        setWeather(weatherData);
    }

    getData();
    
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
