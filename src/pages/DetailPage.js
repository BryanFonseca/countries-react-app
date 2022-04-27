import { useContext, useEffect, useState } from "react";
import AppContext from "../context/app-context";
import { useParams, useHistory } from "react-router-dom";
import CardDetail from "../components/ui/CardDetail";

import Button from "../components/ui/Button";

import classes from "../pages/Pages.module.css";
import ArrowLeft from "../components/ui/icons/ArrowLeft";

const DetailPage = () => {
  const params = useParams();
  const history = useHistory();

  const ctx = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!ctx.countriesData) {
      setIsLoading(true);
      fetch(
        "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags"
      )
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          ctx.setCountriesData(data);
        });
    }
  }, []);

  return (
    <>
      <main className={classes.main}>
        <Button onClick={history.goBack} className={classes.backButton}>
          <ArrowLeft />
          Back
        </Button>

        {isLoading ? <p>Loading...</p> : ""}

        {ctx.countriesData && <CardDetail countryId={params.countryId} />}
      </main>
    </>
  );
};

export default DetailPage;
