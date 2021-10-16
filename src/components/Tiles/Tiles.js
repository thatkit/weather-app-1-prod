import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import { Tile } from '../Tile/Tile';

export const Tiles = (props) => {
    return (
        <>
            <Row>
                <Col>
                    <Tile 
                        heading="Temperature"
                        value={props.weather.main.temp}
                    />
                </Col>
                <Col>
                    <Tile 
                        heading="Humidity"
                        value={props.weather.main.humidity}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Tile 
                        heading="Wind"
                        value={props.weather.wind.speed}
                    />
                </Col>
                <Col>
                    <Tile 
                        heading="Clouds"
                        value={props.weather.clouds.all}
                    />
                </Col>
            </Row>
        </>
    )
}
