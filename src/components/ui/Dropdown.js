import { useState, useRef, useEffect, useContext } from "react";
import AppContext from "../../context/app-context";
import classes from "./Dropdown.module.css";
import generals from "./General.module.css";

import DownArrow from './icons/DownArrow';

let dropdownHeight = 0;
let dropdownPadding = {
  topBottom: 0,
  leftRight: 0,
};

const Dropdown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownContentRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      // this is called after both effects ran and the dropdown was hidden
      // refactor to RaF
      dropdownContentRef.current.style.transition = "all 0.4s";
    });
    dropdownHeight = dropdownContentRef.current.scrollHeight;
    const paddingArray = window
      .getComputedStyle(dropdownContentRef.current)
      .padding.split(" ");

    [dropdownPadding.topBottom, dropdownPadding.leftRight] = paddingArray;
  }, []);

  useEffect(() => {
    if (isVisible) {
      dropdownContentRef.current.style.height = `${dropdownHeight}px`;
      dropdownContentRef.current.style.padding = `${dropdownPadding.topBottom} ${dropdownPadding.leftRight}`;
    } else {
      dropdownContentRef.current.style.height = 0;
      dropdownContentRef.current.style.padding = `0px ${dropdownPadding.leftRight}`;
    }
  }, [isVisible]);

  const onShowDropdownHandler = () => {
    setIsVisible((state) => !state);
  };

  const ctx = useContext(AppContext);

  const onFilter = (e) => {
    // event delegation
    const filter = e.target.textContent;
    ctx.filterCountries(filter);
    setIsVisible(false);
  };

  return (
    <div className={`${classes.dropdown}`}>
      <button
        onClick={onShowDropdownHandler}
        className={`${classes.dropdownButton} ${generals.element}`}
      >
        <span>Filter by Region</span>
	<DownArrow />
      </button>
      <ul
      onClick={onFilter}
        ref={dropdownContentRef}
        className={`${classes.dropdownContent} ${generals.element}`}
      >
        <li>
          <button>Africa</button>
        </li>
        <li>
          <button>America</button>
        </li>
        <li>
          <button>Asia</button>
        </li>
        <li>
          <button>Europe</button>
        </li>
        <li>
          <button>Oceania</button>
        </li>
        <li>
          <button>Show All</button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;