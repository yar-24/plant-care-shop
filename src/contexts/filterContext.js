import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../redux/reducer/filterReducer";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [{ sort, plantTipe, plantEnvironment, plantSize, plantBenefit, productTipe, price, sale }, filterDispatch] = useReducer(
    filterReducer,
    {
      sort: "",
      plantTipe: [],
      plantEnvironment: [],
      plantSize: [],
      plantBenefit: [],
      productTipe: [],
      price: [],
      sale: [],
    }
  );

  return (
    <FilterContext.Provider
      value={{ sort, plantTipe, plantEnvironment, plantSize, plantBenefit, productTipe, price, sale, filterDispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
