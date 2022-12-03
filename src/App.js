import { createTheme, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./contexts/cartContext";
import { FilterProvider } from "./contexts/filterContext";
import LocaleContext from "./contexts/LocaleContext";
import Navigation from "./Navigation";
import store from "./redux/store";
import "./styles/write.scss";
import { colors } from "./utils";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.secondary,
    },
  },
});

const App = () => {
  const [locale, setLanguage] = useState(
    localStorage.getItem("locale") || "en"
  );

  const changeLocale = (newLocale) => {
    localStorage.setItem("locale", newLocale);
    setLanguage(newLocale);
  };

  const localeContextValue = React.useMemo(
    () => ({ locale, changeLocale }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={localeContextValue}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <FilterProvider>
              <Router>
                <Navigation />
              </Router>
            </FilterProvider>
          </CartProvider>
        </ThemeProvider>
      </Provider>
    </LocaleContext.Provider>
  );
};

export default App;
