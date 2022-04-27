import { Route, Switch, Redirect } from "react-router-dom";

import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

import Layout from "./components/ui/layout/Layout";
import Countries from "./components/countries/Countries";

import classes from "./App.module.css";
import { useContext } from "react";
import AppContext from "./context/app-context";

function App() {
  const { scheme } = useContext(AppContext);
  const schemeClassName = scheme === "dark" ? classes.dark : classes.light;

  /*     <Layout className={schemeClassName}>
      <Countries />
    </Layout> */

  return (
    <Layout className={schemeClassName}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/countries" />
        </Route>
        <Route path="/countries" exact>
          <MainPage />
        </Route>
        <Route path="/countries/:countryId">
          <DetailPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
