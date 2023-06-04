import { createContext, useEffect, useReducer, useState } from "react";
import { productService } from "../services/ProductsService/ProductsService";
import { filterTypes } from "../constants/filterTypes";
// import { categoriesService } from "../services/CategoriesService/CategoriesService"


export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const { SET_PRODUCTS } = filterTypes;

  const productsReducer = (state, action) => {
    switch (action.type) {
      case SET_PRODUCTS:
        return { ...state, products: action.payload };
    }
  };
  const [state, dispatch] = useReducer(productsReducer, {
    products: [],
  });

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const response = await productService();
      const {status, data: { products },} = response;
      if (status === 200) {
        dispatch({type: SET_PRODUCTS, payload: products})
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // const getCategories = async() => {
  //   try {
  //     const response = await categoriesService();
  //     const {status, data:{categories}} = response;
  //     console.log("from product context", categories);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    getProducts();
    // getCategories();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
