import classes from "./SearchBar.module.css";
import generals from "./General.module.css";

import SearchIcon from "./icons/SearchIcon";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/app-context";

const SearchBar = () => {
  const ctx = useContext(AppContext);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
/*     const timeoutId = setTimeout(() => {
      if (!searchText) {
        ctx.filterCountriesByName(searchText);
      }
    }, 250);
    return () => {
      clearTimeout(timeoutId);
    }; */
  }, [searchText]);

  const onChangeSearchTextHandler = (e) => {
    setSearchText(e.target.value);
  };

  const onSearchHandler = (e) => {
    e.preventDefault();
    ctx.filterCountriesByName(searchText);
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className={`${classes.searchForm} ${generals.element}`}
    >
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
