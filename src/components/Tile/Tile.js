import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardTitle, CardText } from 'reactstrap';

export const Tile = (props) => {
    return (
    <Card body outline color="secondary">
        <CardTitle tag="h5">heading</CardTitle>
        <CardText>image</CardText>
    </Card>
    );
}