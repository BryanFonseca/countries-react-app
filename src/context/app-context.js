import { createContext, useState } from "react";

const AppContext = createContext({
  countriesData: [],
  darkMode: true,
  setScheme: () => {},
});

export const AppContextProvider = (props) => {
  const [scheme, setScheme] = useState("dark");
  const [countriesData, setCountriesData] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);

  const toggleScheme = () => {
    setScheme((state) => {
      if (state === "dark") {
        return "light";
      }
      return "dark";
    });
  };

  const filterCountries = (enteredFilter) => {
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
        filterCountries,
        filteredCountries,
        filterCountriesByName,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
