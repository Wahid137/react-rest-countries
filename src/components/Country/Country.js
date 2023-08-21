import React from 'react';
import './Country..css'

const Country = (props) => {
    const { area, population, name, region, flags } = props.country;
    return (
        <div className='country'>
            <h1>Name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p><small>Area: {area}</small></p>
            <p>Region: {region}</p>


        </div>
    );
};

export default Country;