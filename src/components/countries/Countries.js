import { useEffect, useState, useContext } from "react";
import AppContext from "../../context/app-context";
import classes from "./Countries.module.css";
import CountryCard from "./CountryCard";

const Countries = () => {
  const [isLoading, setIsLoading] = useState(false);
  const ctx = useContext(AppContext);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags"
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        ctx.setCountriesData(data);
      });
  }, []);

  let countriesCards;
  if (ctx.countriesData) {
    const dataSource = ctx.filteredCountries ?? ctx.countriesData;
    countriesCards = dataSource.map((countryData) => {
      return (
        <CountryCard
          key={countryData.name.common}
          imageUrl={countryData.flags?.png ?? countryData.flags?.svg}
          name={countryData.name.common}
          population={countryData.population}
          region={countryData.region}
          capital={countryData?.capital?.[0] ?? countryData.capital ?? ""}
        />
      );
    });
  }

  return (
    <ul className={classes.countriesGrid}>
      {isLoading ? <p>Loading...</p> : countriesCards}
    </ul>
  );
};

export default Countries;
