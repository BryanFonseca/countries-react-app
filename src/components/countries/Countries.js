import { useEffect, useContext, useState } from "react";
import AppContext from "../../context/app-context";
import classes from "./Countries.module.css";
import CountryCard from "./CountryCard";

import useHttp from "../../hooks/use-http";

import { NavLink } from "react-router-dom";

const Countries = () => {
  const ctx = useContext(AppContext);

  const { request, isLoading, error } = useHttp();

  useEffect(() => {
    if (!ctx.countriesData) {
      request(
        "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags",
        ctx.setCountriesData
      );
    }
  }, [ctx.setCountriesData, request, ctx.countriesData]);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    // loading cards in chunks 😵
    if (isLoading) return;
    if (!ctx.countriesData) return;

    const dataSource = ctx.filteredCountries ?? ctx.countriesData;

    if(ctx.filteredCountries) {
      setCards([]);
    }

    const cardsCount = dataSource.length;
    const divideInto = Math.ceil(cardsCount / 20);
    //const divideInto = 10; 
    const chunkSize = Math.floor(cardsCount / divideInto);
    let iteration = 0;

    setTimeout(function generateCards() {
      const base = chunkSize * iteration;
      const toAddCardsArray = [];
      // from  base to (base + chunkSize) per iteration
      for (let i = base; i < base + chunkSize; i++) {
	const card = <NavLink
            key={dataSource[i].name.common}
            to={`/countries/${dataSource[i].name.common}`}
          >
            <CountryCard
              imageUrl={dataSource[i].flags?.png ?? dataSource[i].flags?.svg}
              name={dataSource[i].name.common}
              population={dataSource[i].population}
              region={dataSource[i].region}
              capital={dataSource[i]?.capital?.[0] ?? dataSource[i].capital ?? ""}
            />
          </NavLink>
	toAddCardsArray.push(card)
      }
      setCards((prevState) => {
	return [
	  ...prevState,
	  ...toAddCardsArray
	];
      })
      iteration++;
      if (iteration < divideInto) {
	setTimeout(generateCards, 0);
      }
    }, 0);
  }, [isLoading, ctx.filteredCountries, ctx.countriesData]);

  return (
    <ul className={classes.countriesGrid}>
      {error}
      {isLoading ? <p>Loading...</p> : cards}
    </ul>
  );
};

export default Countries;
