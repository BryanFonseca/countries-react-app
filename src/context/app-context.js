import { createContext, useState } from "react";

const AppContext = createContext({
});

export const AppContextProvider = (props) => {
  const [scheme, setScheme] = useState("dark");
  const [countriesData, setCountriesData] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [areActionsHidden, setAreActionsHidden] = useState(true);

  const onHideActions = () => {
    setAreActionsHidden(true);
  };

  const onShowActions = () => {
    setAreActionsHidden(false);
  }

  const toggleScheme = () => {
    setScheme((state) => {
      if (state === "dark") {
        return "light";
      }
      return "dark";
    });
  };

  const filterCountriesByRegion = (enteredFilter) => {
    if (enteredFilter.toLowerCase().includes("all")) {
      setFilteredCountries(countriesData);
      return;
    }
    setFilteredCountries(
      countriesData.filter((country) => {
        // so that it matches Americas as America
        return country.region.includes(enteredFilter);
      })
    );
  };

  const filterCountriesByName = (enteredName) => {
    if (enteredName === "") {
      setFilteredCountries(countriesData);
      return;
    }

    setFilteredCountries(
      countriesData.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(enteredName.toLowerCase());
      })
    );
  };

  return (
    <AppContext.Provider
      value={{
        toggleScheme,
        scheme,
        countriesData,
        setCountriesData,
        filterCountriesByRegion,
        filteredCountries,
        filterCountriesByName,
	onHideActions,
	onShowActions,
	areActionsHidden
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
