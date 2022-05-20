import { useEffect, useContext } from "react";
import AppContext from "../../context/app-context";
import classes from "./Countries.module.css";
import CountryCard from "./CountryCard";
import Paginate from "../ui/pagination/Paginate";

import useHttp from "../../hooks/use-http";

import { NavLink } from "react-router-dom";

const Countries = () => {
  const ctx = useContext(AppContext);

  const { request, error } = useHttp();

  useEffect(() => {
    if (!ctx.countriesData) {
      request(
        "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags",
        ctx.setCountriesData
      );
    }
  }, [ctx.setCountriesData, request, ctx.countriesData]);

  let countriesCards;
  if (ctx.countriesData) {
    const dataSource = ctx.filteredCountries ?? ctx.countriesData;
    countriesCards = dataSource.map((countryData) => {
      return (
        <NavLink
          key={countryData.name.common}
          to={`/countries/${countryData.name.common}`}
        >
          <CountryCard
            imageUrl={countryData.flags?.png ?? countryData.flags?.svg}
            name={countryData.name.common}
            population={countryData.population}
            region={countryData.region}
            capital={countryData?.capital?.[0] ?? countryData.capital ?? ""}
          />
        </NavLink>
      );
    });
  }

  return (
    <ul>
      {error}
      {!countriesCards ? (
        <p>Loading...</p>
      ) : (
        <Paginate className={classes.countriesGrid} itemsPerPage="8">
          {countriesCards}
        </Paginate>
      )}
    </ul>
  );
};

export default Countries;
