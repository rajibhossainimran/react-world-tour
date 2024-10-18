import { useEffect } from "react";
import { useState } from "react";


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
        </div>
    );
};

export default Countries;