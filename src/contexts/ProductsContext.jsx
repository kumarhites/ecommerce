import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

import { productReducer } from "../reducers/productReducer";

export const ProductsContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  trending: [],
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  // get all products
  const getproducts = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get("/api/products");
      if (response.status === 200) {
        const products = response.data.products;
        dispatch({ type: "SET_PRODUCT", payload: products });
      }
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <ProductsContext.Provider value={{
      ...state,
     }}>
      {children}
    </ProductsContext.Provider>
  );
};
