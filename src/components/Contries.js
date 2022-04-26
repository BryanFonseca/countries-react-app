import classes from './Countries.module.css';
import CountryCard from "./CountryCard";

const Contries = () => {
  return (
    <ul className={classes.countriesGrid}>
      <CountryCard name="United States of America" population="323,534,000" region="Americas" capital="Washington, D.C." />
      <CountryCard name="United States of America" population="323,534,000" region="Americas" capital="Washington, D.C." />
      <CountryCard name="United States of America" population="323,534,000" region="Americas" capital="Washington, D.C." />
      <CountryCard name="United States of America" population="323,534,000" region="Americas" capital="Washington, D.C." />
    </ul>
  );
};

export default Contries;
