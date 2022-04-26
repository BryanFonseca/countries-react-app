import { useState, useRef, useEffect } from "react";
import classes from "./Dropdown.module.css";
import generals from "./General.module.css";

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
      dropdownContentRef.current.style.transition = "all 0.5s";
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

  return (
    <div className={`${classes.dropdown}`}>
      <button
        onClick={onShowDropdownHandler}
        className={`${classes.dropdownButton} ${generals.element}`}
      >
        <span>Filter by Region</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <ul
        ref={dropdownContentRef}
        className={`${classes.dropdownContent} ${generals.element}`}
      >
        <li>Africa</li>
        <li>America</li>
        <li>Asia</li>
        <li>Europe</li>
        <li>Oceania</li>
      </ul>
    </div>
  );
};

export default Dropdown;
