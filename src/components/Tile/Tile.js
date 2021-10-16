import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardTitle, CardText } from 'reactstrap';

export const Tile = (props) => {
    return (
    <Card body outline color="secondary" className="mt-2 mb-3">
        <CardTitle tag="h5">{props.heading}</CardTitle>
        <CardText>{props.value}</CardText>
    </Card>
    );
}