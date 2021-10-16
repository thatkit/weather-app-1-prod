import React from 'react'

export const Header = (props) => {
    return (
        <>
            <h1 className="display-2 mt-4 mb-4">
                Weather for your coordinates!
            </h1>
            <p className="lead">
                Your place: {props.weather.name}
            </p>
            <p className="lead">
                Your coordinates: {props.weather.coord.lon}&deg;, {props.weather.coord.lat}&deg;
            </p>
            <p className="lead">
                Your weather:
            </p>
        </>
    )
}
