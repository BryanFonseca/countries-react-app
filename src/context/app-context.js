import { createContext, useState } from "react";

const AppContext = createContext({
  countriesData: [],
  darkMode: true,
  setScheme: () => {},
});

const initialState = {
  scheme: "dark",
};

export const AppContextProvider = (props) => {
  const [scheme, setScheme] = useState("dark");

  const toggleScheme = () => {
    setScheme((state) => {
      if (state === "dark") {
        return "light";
      }
      return "dark";
    });
  };

  return (
    <AppContext.Provider
      value={{
	toggleScheme,
        scheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
