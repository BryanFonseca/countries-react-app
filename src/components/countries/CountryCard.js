import classes from "./CountryCard.module.css";
import generals from "../ui/General.module.css";

const CountryCard = (props) => {
  return (
    <div className={`${classes.card} ${generals.element}`}>
      <img src={props.imageUrl} alt={`${props.name} flag`} />
      <div className={classes.cardInfo}>
        <h3>{props.name}</h3>
        <p>
          <strong>Population:</strong> {new Intl.NumberFormat(navigator.language).format(props.population)}
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
