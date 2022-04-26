import classes from "./CountryCard.module.css";
import generals from "./General.module.css";

const CountryCard = (props) => {
  return (
    <div className={`${classes.card} ${generals.element}`}>
      <div className={classes.cardInfo}>
        <h3>{props.name}</h3>
        <p>
          <strong>Population:</strong> {props.population}
        </p>
        <p>
          <strong>Region:</strong> {props.region}
        </p>
        <p>
          <strong>Capital:</strong> {props.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
