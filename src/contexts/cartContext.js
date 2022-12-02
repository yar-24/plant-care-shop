import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../redux/reducer/cartReducer";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [{cart}, cartDispatch] = useReducer(cartReducer, {
        cart: [],
    })

    return (
        <CartContext.Provider value={{cart, cartDispatch}}>{children}</CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider }