import React, { useState } from "react";
import Navigation from "./Navigation";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { LocaleProvider } from "./contexts/LocaleContext";
import "./styles/write.scss";

const App = () => {
  const [language, setLanguage] = useState("");
  const [cartItems, setCartItems] = useState([]);


  const localeContext = {
    locale: localStorage.getItem("locale") || "id",
    toggleLocale: () =>
      setLanguage(() => {
        const newLocale = localeContext.locale === "id" ? "en" : "id";
        localStorage.setItem("locale", newLocale);
        return {
          localeContext: {
            ...localeContext,
            locale: newLocale,
          },
        };
      }),
  };

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
    <LocaleProvider value={localeContext}>
      <Provider store={store}>
        <Router>
          <Navigation
            cartItems={cartItems}
            quantity={cartItems.length}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleDeleteProduct={handleDeleteProduct}
          />
        </Router>
      </Provider>
    </LocaleProvider>
  );
};

export default App;
