import classes from './Controls.module.css';

import SearchBar from "../SearchBar";
import Dropdown from "../Dropdown";

const Controls = () => {
  return (
    <div className={classes.wrapper} >
      <SearchBar />
      <Dropdown />
    </div>
  );
};

export default Controls;
