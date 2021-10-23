import React from 'react';
import weatherIcon from './svg/weather.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

export class Icon extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSVG = this.toggleSVG.bind(this);
    }

    componentDidUpdate() {
        this.toggleSVG(this.icons[`_${this.props.icon}`]);
    }
    
    icons = {
        _01d: 'day',
        _01n: 'night',
        _02d: 'cloudy-day-1',
        _02n: 'cloudy-night-1',
        _03d: 'cloudy-day-2',
        _03n: 'cloudy-night-2',
        _04d: 'cloudy-day-3',
        _04n: 'cloudy-night-3',
        _09d: 'rainy-6',
        _09n: 'rainy-6',
        _10d: 'rainy-3',
        _10n: 'rainy-3',
        _11d: 'thunder',
        _11n: 'thunder',
        _13d: 'snowy-3',
        _13n: 'snowy-3',
        _50d: 'cloudy',
        _50n: 'cloudy'
    };
    
    async toggleSVG(elId) {
        const res = await fetch(weatherIcon);
        const text = await res.text();

        if (document.getElementById('icon').children.length < 1) {
            document
                .getElementById('icon')
                .insertAdjacentHTML("afterbegin", text);
        }
        
        document
            .querySelectorAll('svg#svg-icon > g')
            .forEach(el => {
                el.style.display = 'none';
                if (window.innerWidth > 372) {
                    el.style.transform = 'scale(2)';
                } else if (window.innerWidth > 280) {
                    el.style.transform = 'scale(1.5)';
                    document.getElementById('svg-icon').setAttribute('width', 96);
                    document.getElementById('svg-icon').setAttribute('height', 96);
                } else {
                    el.style.transform = 'scale(1)';
                    document.getElementById('svg-icon').setAttribute('width', 64);
                    document.getElementById('svg-icon').setAttribute('height', 64);
                }
                if (el.id === elId) {
                    el.style.display = 'block';
                }
            });
                    
        return null;
    }

    render() {
        return (
            <Container id="icon" style={{'padding': 0}}></Container>
        )
    }
}