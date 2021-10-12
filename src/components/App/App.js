import React, { useState, useEffect } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import db from '../../db.json'; // for develompent only

export const App = (props) => {
    const [weather, setWeather] = useState({
        main: {
            temp: 0
        }
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
        <div>
            <Jumbotron tag="tag-name" fluid={true}>
                <h1 className="display-3">Weather for your coordinates!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    )
}
