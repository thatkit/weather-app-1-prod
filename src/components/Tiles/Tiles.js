import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import { Tile } from './Tile/Tile';

export const Tiles = (props) => {
    
    const fahrenheitCountries = ['US', 'BS', 'KY', 'LR', 'PW', 'FM', 'MH'];
    
    return (
        <>
            <Row>
                <Col xs="12" sm="6" md="3">
                    <Tile 
                        heading="Temperature"
                        value={
                            fahrenheitCountries.includes(props.weather.sys.country) ?
                            Math.round(props.weather.main.temp) : 
                            Math.round((props.weather.main.temp - 32) * 5 / 9)
                        }
                    />
                </Col>
                <Col xs="12" sm="6" md="3">
                    <Tile 
                        heading="Humidity"
                        value={props.weather.main.humidity}
                    />
                </Col>
                <Col xs="12" sm="6" md="3">
                    <Tile 
                        heading="Wind"
                        value={props.weather.wind.speed}
                    />
                </Col>
                <Col xs="12" sm="6" md="3">
                    <Tile 
                        heading="Clouds"
                        value={props.weather.clouds.all}
                    />
                </Col>
            </Row>
        </>
    )
}
