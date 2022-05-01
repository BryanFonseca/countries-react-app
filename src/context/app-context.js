import { createContext, useState, useReducer } from "react";

const AppContext = createContext({});

const uiOpenablesReducer = (prevState, action) => {
  if (action.type === "SUBSCRIBE") {
    return [...prevState, action.openableComponent];
  }
  if (action.type === "UNSUBSCRIBE") {
    const newSubscribers = prevState.filter(
      (openable) => openable.ref !== action.subscriber.ref
    );
    return [...newSubscribers];
  }
  return [...prevState];
};

export const AppContextProvider = (props) => {
  const [scheme, setScheme] = useState("dark");
  const [countriesData, setCountriesData] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);

  const [uiOpenables, dispatchUiOpenables] = useReducer(uiOpenablesReducer, []);

  const onHideOpenables = (openableClicked) => {
    if (uiOpenables.find((openable) => openable.ref === openableClicked)) return;
    uiOpenables.forEach((openable) => openable.hide());
  };

  const subscribeOpenable = (openableComponent) => {
    dispatchUiOpenables({ type: "SUBSCRIBE", openableComponent });
  };

  const unSubscribeOpenable = (subscriber) => {
    dispatchUiOpenables({ type: "UNSUBSCRIBE", subscriber });
  };

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
        onHideOpenables,
        subscribeOpenable,
        unSubscribeOpenable,
        uiOpenables,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
