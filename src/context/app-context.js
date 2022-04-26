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
    if(enteredFilter.toLowerCase().includes('all')) {
      setFilteredCountries(countriesData);
      return;
    }
    setFilteredCountries(
      countriesData.filter((country) => {
        return country.region.includes(enteredFilter);
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
