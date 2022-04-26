import { useEffect, useState } from "react";
import classes from "./Countries.module.css";
import CountryCard from "./CountryCard";

const Countries = () => {
  const [countriesCards, setCountriesCards] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        console.log(data);
        setCountriesCards(
          data.map((countryData) => {
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
          })
        );
      });
  }, []);

  return (
    <ul className={classes.countriesGrid}>
      {isLoading ? <p>Loading...</p> : countriesCards}
    </ul>
  );
};

export default Countries;
