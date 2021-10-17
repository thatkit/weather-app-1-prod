import React from 'react';
import weatherIcon from './svg/weather.svg'

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
    
    toggleSVG = async elId => {
        // First, get the svg text and insert it into the DOM
        const res = await fetch(weatherIcon);
        const text = await res.text();
        document.getElementById('icon').insertAdjacentHTML("afterbegin", text);
        
        // Second, assign the chosen element to a variable
        const svgEl = document.querySelector(`svg#svg-icon > g#${elId}`);
        
        // Third, hide all other elements and reveal the chosen one
        document.querySelectorAll('svg#svg-icon > g').forEach(el => el.style.display = 'none');
        svgEl.style.display = 'block';
        
        return null;
    }

    render() {
        return (
            <div 
                id="icon"
            ></div>
        )
    }
}