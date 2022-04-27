import classes from "./Button.module.css";
import generals from "../ui/General.module.css";

const Button = (props) => {
  let buttonSizeClass =
    props.size === "small" ? classes.buttonSmall : classes.button;

  buttonSizeClass += props.className ? ' ' + props.className : '';

  return (
    <button onClick={props.onClick} className={`${buttonSizeClass} ${generals.element}`}>
      {props.children}
    </button>
  );
};

export default Button;
