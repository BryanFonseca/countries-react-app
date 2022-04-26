import Layout from "./components/Layout";
import Countries from "./components/Contries";

import classes from "./App.module.css";

function App() {

  return (
    <Layout className={`${classes.dark}`}>
      <Countries />
    </Layout>
  );
}

export default App;
