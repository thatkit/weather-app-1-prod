import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron, Button } from 'reactstrap';
import db from '../../db.json'; // for develompent only
// change coords from api 

export const App = (props) => {
    const [weather, setWeather] = useState({
        coord: {
            lon: 0,
            lat: 0
        },
        main: {
            temp: 0
        },
        wind: {
            speed: 0,
            deg: 0
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
        // <div>
        //     <h1>Weather App</h1>
        //     <h2>Build with React.js, Express.js with Open Weather API</h2>
        //     <div>
        //         <p>
        //             {weather.main.temp}
        //         </p>
        //     </div>
        // </div>
        <Container>
            <Jumbotron>
                <h1 className="display-2 mt-4 mb-4">Weather for your coordinates!</h1>
                <p className="lead">
                    Your place: {weather.name}
                </p>
                <p className="lead">
                    Your coordinates: {weather.coord.lon}&deg;, {weather.coord.lat}&deg;
                </p>
                <hr className="my-4" />
                <p>
                    here is the place for mini cards for each weather attribute with a small animated image
                    
                    {weather.wind.speed}, {weather.main.temp}, etc...
                </p>
                <Button color="secondary">Learn more</Button>
            </Jumbotron>
        </Container>
      )
}
