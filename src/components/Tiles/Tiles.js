import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import { Tile } from './Tile/Tile';

export const Tiles = (props) => {
    return (
        <>
            <Row>
                <Col xs="12" sm="6" md="3">
                    <Tile 
                        heading="Temperature"
                        value={props.weather.main.temp}
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
