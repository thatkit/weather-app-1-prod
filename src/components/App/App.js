import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron, Button } from 'reactstrap';
import { Tile } from '../Tile/Tile'
import db from '../../db.json'; // for develompent only
// change coords from api 

export const App = (props) => {
    const [weather, setWeather] = useState({
        coord: {
            lon: 0,
            lat: 0
        },
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
            <Jumbotron>
                <h1 className="display-2 mt-4 mb-4">Weather for your coordinates!</h1>
                <p className="lead">
                    Your place: {weather.name}
                </p>
                <p className="lead">
                    Your coordinates: {weather.coord.lon}&deg;, {weather.coord.lat}&deg;
                </p>
                <p className="lead">
                    Your weather:
                </p>
                <Tile 
                    heading="Temperature"
                    value={weather.main.temp}
                />
                <Tile 
                    heading="Humidity"
                    value={weather.main.humidity}
                />
                <Tile 
                    heading="Wind"
                    value={weather.wind.speed}
                />
                <Tile 
                    heading="Clouds"
                    value={weather.clouds.all}
                />
                <Button color="secondary">Learn more</Button>
            </Jumbotron>
        </Container>
      )
}
