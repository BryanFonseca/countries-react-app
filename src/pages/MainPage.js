import Countries from "../components/countries/Countries";
import Controls from "../components/ui/layout/Controls";

import classes from "../pages/Pages.module.css";

const MainPage = () => {
  return (
    <>
      <Controls />
      <main className={classes.main}>
        <Countries />
      </main>
    </>
  );
};

export default MainPage;
