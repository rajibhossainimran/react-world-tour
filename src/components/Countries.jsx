import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";


const Countries = () => {
    const [countires, setCountires] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountires(data))
    },[])
    return (
        <div>
            <h6>Countries : {countires.length}</h6>
            {
                countires.map(country=><Country key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;