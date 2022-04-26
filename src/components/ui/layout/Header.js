import classes from "./Header.module.css";
import DarkModeButton from "../DarkModeButton";

import generals from '../General.module.css';

const Header = () => {
  return (
    <header className={`${classes.header} ${generals.element}`}>
      <h1>Where in the world?</h1>
      <DarkModeButton />
    </header>
  );
};

export default Header;
