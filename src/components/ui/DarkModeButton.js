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

  const buttonContent =
    ctx.scheme === "dark" ? (
      <>
        <SunIcon /> Light Mode
      </>
    ) : (
      <>
        <MoonIcon /> Dark Mode
      </>
    );

  return (
    <button onClick={onChangeSchemeHandler} className={classes.darkmodeButton}>
      {buttonContent}
    </button>
  );
};

export default DarkModeButton;
