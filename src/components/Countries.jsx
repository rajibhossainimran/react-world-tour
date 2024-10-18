import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './countries.css'


const Countries = () => {
    const [countires, setCountires] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountires(data))
    },[]);
    const [visitedCountries, setVisitedCountries] =useState([]);
    const showVisitedCountries =country =>{
        const newVisited =[...visitedCountries,country];
        setVisitedCountries(newVisited)
    }
    return (
        <div>
            <h6>Countries : {countires.length}</h6>
            <div>
                <ul>
                {
                    visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
                }
                </ul>
                <h4>Show visited countries : {visitedCountries.length}</h4>
            </div>
            <div className="country-container">
            {
                countires.map(country=><Country
                     key={country.cca3}
                    country={country}
                    showVisitedCountries={showVisitedCountries}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;