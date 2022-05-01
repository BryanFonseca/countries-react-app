import { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import AppContext from "../context/app-context";
import CardDetail from "../components/ui/CardDetail";
import useHttp from "../hooks/use-http";
import Button from "../components/ui/Button";
import ArrowLeft from "../components/ui/icons/ArrowLeft";

import classes from "../pages/Pages.module.css";

const DetailPage = () => {
  const params = useParams();
  const history = useHistory();

  const ctx = useContext(AppContext);

  const { request, isLoading } = useHttp();
  useEffect(() => {
    if (!ctx.countriesData) {
      request(
        "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags",
        ctx.setCountriesData
      );
    }
  }, [ctx.setCountriesData, request, ctx.countriesData]);

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
