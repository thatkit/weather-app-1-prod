import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

import { Header } from '../Header/Header'
import { Tiles } from '../Tiles/Tiles'
import { Btn } from '../Btn/Btn'

import db from '../../db.json'; // for develompent only
// change coords from api 

export const App = (props) => {
    const [weather, setWeather] = useState({
        coord: {
            lon: 0,
            lat: 0
        },
        weather: [
            {
                description: '',
                icon: ''
            }
        ],
        main: {
            temp: 0,
            humidity: 0
        },
        wind: {
            speed: 0,
            deg: 0
        },
        clouds: {
            all: 0
        },
        name: ''
    });
    
    const getData = async () => {
        // if ('geolocation' in navigator) {
        //     navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        //         const lat = coords.latitude;
        //         const lon = coords.longitude;
                        
        //         const apiURL = `/${lat}/${lon}`;
        //         const res = await fetch(apiURL);
        //         const json = await res.json();

        //         setWeather(json);

        //         return null;
        //     });
        // } else {
        //     console.log('geolocation IS NOT available');
        // }
        setWeather(db);
    }    
    
    useEffect(() => {
        getData();
    }, []);
    
    return (
        <Container>
            <Header weather={weather} />
            <Tiles weather={weather} />
            <Btn />
        </Container>
      )
}
