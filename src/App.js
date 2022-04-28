import { useContext } from "react";
import AppContext from "./context/app-context";

import { Route, Switch, Redirect } from "react-router-dom";

import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import Layout from "./components/ui/layout/Layout";

import classes from "./App.module.css";

function App() {
  const { scheme } = useContext(AppContext);
  const schemeClassName = scheme === "dark" ? classes.dark : classes.light;

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
