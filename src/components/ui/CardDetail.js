import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../../context/app-context";
import useHttp from "../../hooks/use-http";

import Button from "./Button";

import classes from "./CardDetail.module.css";

const CardDetail = (props) => {
  const ctx = useContext(AppContext);
  const countryData = ctx.countriesData.find(
    (country) => country.name.common === props.countryId
  );

  const {
    name,
    borders,
    flags,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = countryData;

  const [buttons, setButtons] = useState([]);

  const createBorderCountryButton = (country, data) => {
    const countryResponseName = data?.[0].name.common;
    setButtons((prevState) => {
      return [
        ...prevState,
        <NavLink to={`/countries/${countryResponseName}`} key={country}>
          <Button size="small">{countryResponseName}</Button>
        </NavLink>,
      ];
    });
  };

  const { request } = useHttp();

  useEffect(() => {
    // fetch full country names since /all endpoint only provides their the code
    setButtons([]);
    borders.forEach((country) => {
      request(`https://restcountries.com/v3.1/alpha/${country}`, createBorderCountryButton.bind(null, country));
    });
  }, [borders, request]);

  return (
    <div className={classes.countryDetails}>
      <img src={flags.png} alt="" />
      <div className={classes.countryInfo}>
        <h2>{name.common}</h2>
        <div className={classes.countryInfoText}>
          <div>
            <p>
              <strong>Native Name: </strong>
              {name.official}
            </p>
            <p>
              <strong>Population: </strong>
              {population}
            </p>
            <p>
              <strong>Region: </strong>
              {region}
            </p>
            <p>
              <strong>Sub Region: </strong>
              {subregion}
            </p>
            <p>
              <strong>Capital: </strong>
              {capital}
            </p>
          </div>
          <div>
            <p>
              <strong>Top Level Domain: </strong>
              {tld}
            </p>
            <p>
              <strong>Currencies: </strong>
              {Object.values(currencies)?.[0].name}
            </p>
            <p>
              <strong>Languages: </strong>
              {Object.values(languages).join(", ")}
            </p>
          </div>
        </div>
        <div className={classes.bordersContainer}>
          <h3>Border Countries</h3>
          <div className={classes.buttonsContainer}>{buttons}</div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
