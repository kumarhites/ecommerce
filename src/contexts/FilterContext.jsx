import { createContext, useContext, useEffect, useReducer } from "react";
import { ProductsContext } from "./ProductsContext";
import filterReducer from "../reducers/filterReducer";

export const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  searchInput: "",
  sortInput: "",
  ratingInput: "1.0",
  categoryInput: [],
  brandInput: [],
  genderInput: [],
};

export const FilterProvider = ({ children }) => {
  const { products } = useContext(ProductsContext);
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const searchFilterProducts =
    state?.searchInput.length > 0
      ? state?.filterProducts.filter(
          (product) =>
            product.title
              .toLowerCase()
              .includes(state?.searchInput.toLowerCase()) ||
            product.brand
              .toLowerCase()
              .includes(state?.searchInput.toLowerCase())
        )
      : state?.filterProducts;

  const sortProductsByPrice =
    state?.sortInput.length > 0
      ? searchFilterProducts?.sort((a, b) =>
          state?.sortInput === "LTH" ? a?.price - b?.price : b?.price - a?.price
        )
      : searchFilterProducts;

  const categoryFilteredProducts =
    state?.categoryInput.length > 0
      ? sortProductsByPrice.filter((item) =>
          state?.categoryInput.some((category) =>
            item.category.includes(category)
          )
        )
      : sortProductsByPrice;

  const brandFilteredProducts =
    state?.brandInput.length > 0
      ? categoryFilteredProducts.filter((item) =>
          state?.brandInput.some((name) => name === item.brand)
        )
      : categoryFilteredProducts;

  const genderFilteredProducts =
    state?.genderInput.length > 0
      ? brandFilteredProducts.filter((item) =>
          state?.genderInput.some(
            (gender) => gender.toLowerCase() === item.gender.toLowerCase()
          )
        )
      : brandFilteredProducts;

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        dispatch,
        genderFilteredProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
