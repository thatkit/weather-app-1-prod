import React from 'react';

export const Icon = (props) => {
    return (
        <img
            alt={'weather icon' + props.description}
            src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
        />
    )
}
