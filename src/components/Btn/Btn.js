import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

export const Btn = () => {
    return (
        <Button 
            color="secondary" 
            href="https://github.com/thatkit/weather-app-1" 
            target="_blank"
            className="mt-2"
        >
            Github
        </Button>
    )
}
