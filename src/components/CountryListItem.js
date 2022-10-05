import {  useState } from "react";
// import VisitedCountriesList from "./VisitedCountriesList";

const CountryListItem = ({name, flag,index}) => {

    const [status,setStatus] = useState("☑️");

    const displayCountry = `${name} ${flag}`;

    const handleClick = () => {
        setStatus("✅")

    }

    
    return (
        <>
        <li id={index}>{displayCountry} <button onClick= {handleClick}> {status} </button></li>
        </>
    );
}

export default CountryListItem;