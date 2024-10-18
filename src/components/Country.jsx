import { useState } from 'react';
import './Country.css';

const Country = ({country,showVisitedCountries}) => {
    const {name,flags,population ,area,cca3}= country;
    // console.log(country)
    const [visited, setVisited] = useState(false);
    const clickHandler =()=>{
        setVisited(!visited);
    }
    return (
        <div className={`box ${visited&&'visited'}`}>
            <h4>{name?.common}</h4>
            <img src={flags.png}/>
            <h5>Population : {population}</h5>
            <h5>Area : {area}</h5>
            <p>country code : {cca3}</p>
            <button onClick={()=>showVisitedCountries(country)}>Show Visited</button>
            <br />
            <button onClick={clickHandler}>{visited?'visited':'want go'}</button>
            {visited? 'you are visited':'I want to go'}
        </div>
    );
};

export default Country;