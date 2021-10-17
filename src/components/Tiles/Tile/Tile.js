import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, CardTitle, CardText } from 'reactstrap';

export const Tile = (props) => {
    return (
        <Card body outline color="secondary" className="mt-2 mb-3">
            <Row>
                <Col xs="8" sm="12">
                    <CardTitle tag="h5">{props.heading}</CardTitle>
                </Col>
                <Col xs="4" sm="12">
                    <CardText>{props.value}</CardText>
                </Col>
            </Row>
        </Card>
    );
}