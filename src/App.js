import { createTheme, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import LocaleContext from './contexts/LocaleContext';
import Navigation from './Navigation';
import store from './redux/store';
import './styles/write.scss';
import { colors } from './utils';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.secondary,
    },
  },
});

const App = () => {
  const [locale, setLanguage] = useState(
    localStorage.getItem('locale') || 'en'
  );
  const [cartItems, setCartItems] = useState([]);

  const changeLocale = (newLocale) => {
    localStorage.setItem('locale', newLocale);
    setLanguage(newLocale);
  };

  const localeContextValue = React.useMemo(
    () => ({ locale, changeLocale }),
    [locale]
  );

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleDeleteProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(cartItems.map((item) => item.id !== product.id));
    }
  };

  return (
    <LocaleContext.Provider value={localeContextValue}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Navigation
              cartItems={cartItems}
              quantity={cartItems.length}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleDeleteProduct={handleDeleteProduct}
            />
          </Router>
        </ThemeProvider>
      </Provider>
    </LocaleContext.Provider>
  );
};

export default App;
