import React from 'react';
import weatherIcon from './svg/weather.svg'

export const Icon = (props) => {

    console.log(props.description, props.icon)

    const placeSVG = async elId => {
        
        // First, get the svg text and insert it into the DOM
        const res = await fetch(weatherIcon);
        const text = await res.text();
        document.getElementById('icon').insertAdjacentHTML("afterbegin", text);
        
        // Second, assign the chosen element to a variable
        const svgEl = document.querySelector(`svg#svg-icon > g#${elId}`);
        
        // Third, hide all other elements and reveal the chosen one
        document.querySelectorAll('svg#svg-icon > g').forEach(el => el.style.display = 'none');
        svgEl.style.display = 'block';

    }

    placeSVG('thunder');

    return (
        <div id="icon">
        </div>
    )
}
