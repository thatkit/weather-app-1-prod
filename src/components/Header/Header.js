import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import { Icon } from './Icon/Icon';

export const Header = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="display-2 mt-4 mb-4">
                        Weather for your coordinates!
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col xs="8">
                    <p className="lead">
                        Your place: {props.weather.name}
                    </p>
                    <p className="lead">
                        Your coordinates: {props.coords.lon}&deg;, {props.coords.lat}&deg;
                    </p>
                    <p className="lead">
                        Your weather:
                    </p>
                </Col>
                <Col xs="4" style={{'padding': 0}}>
                    <Icon
                        icon={props.weather.weather[0].icon}
                    />
                </Col>
            </Row>
        </Container>
    )
}
