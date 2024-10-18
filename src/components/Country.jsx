import './Country.css';

const Country = ({country}) => {
    const {name,flags,population ,area}= country;
    console.log(country)
    return (
        <div className='box'>
            <h4>{name?.common}</h4>
            <img src={flags.png}/>
            <h5>Population : {population}</h5>
            <h5>Area : {area}</h5>
        </div>
    );
};

export default Country;