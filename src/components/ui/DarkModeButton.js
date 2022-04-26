import { useContext } from "react";
import AppContext from "../../context/app-context";
import classes from "./DarkModeButton.module.css";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const DarkModeButton = () => {
  const ctx = useContext(AppContext);

  const onChangeSchemeHandler = () => {
    ctx.toggleScheme();
  };

  return (
    <button
      onClick={onChangeSchemeHandler}
      className={classes["darkmode-button"]}
    >
      <MoonIcon />
      Dark Mode
    </button>
  );
};

export default DarkModeButton;
