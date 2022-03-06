import React from 'react';
import '../Country.css'

const Country = (props) => {
  const  {name,population,area,capital,region,flags,timezones} = props.countryDocuments;
  const handlesAddCountry = props.handlesAddCountry;
    // console.log(props)
    return (
        <div className="container">
        <div className="countryArea">
            <h2>Country Name: {name.common}</h2>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <h5>Time: {timezones}</h5>
            <img src={flags.png} alt="" />
            <button className='button' onClick={() => handlesAddCountry(props.countryDocuments)}>Add country</button>
        </div>
        </div>
    );
};

export default Country;