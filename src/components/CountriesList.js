import CountryListItem from "./CountryListItem";

const CountriesList = ({countries}) => {

    const sortedCountries = countries.sort((a,b)=>{
        return a.name.common.localeCompare(b.name.common)
    })

    const mappedCountries = sortedCountries.map((country, index) => {
        return <CountryListItem name={country.name.common} flag={country.flag} index={index}/>
    })


    return(
        <>
            <h2>CountriesList here!</h2>
            {mappedCountries}
        </>
    );
}

export default CountriesList;