import classes from "./SearchBar.module.css";
import generals from "./General.module.css";

import SearchIcon from "./icons/SearchIcon";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/app-context";

const SearchBar = () => {
  const ctx = useContext(AppContext);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    ctx.filterCountriesByName(searchText);
  }, [searchText]);

  const onChangeSearchTextHandler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <form className={`${classes.searchForm} ${generals.element}`}>
      <button className={classes.searchButton}>
        <SearchIcon />
      </button>
      <input
        value={searchText}
        onChange={onChangeSearchTextHandler}
        placeholder="Search for a country..."
        className={classes.searchInput}
        type="text"
      />
    </form>
  );
};

export default SearchBar;
