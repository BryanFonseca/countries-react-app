import { Route, Switch } from 'react-router-dom';

import Layout from "./components/ui/layout/Layout";
import Countries from "./components/countries/Countries";

import classes from "./App.module.css";
import { useContext } from "react";
import AppContext from "./context/app-context";

function App() {
  const { scheme } = useContext(AppContext);
  const schemeClassName = scheme === "dark" ? classes.dark : classes.light;

  return (
    <Layout className={schemeClassName}>
      <Countries />
    </Layout>
  );
}

export default App;
