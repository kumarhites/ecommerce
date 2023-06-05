import { createContext, useReducer, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";
import axios from "axios";

export const CartContext = createContext();

const initialState = {
  cart: [],
  wishList: [],
};

const TOKEN = localStorage.getItem("token");

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  //get cart items
  const getCartItems = async () => {
    try {
      const response = await axios.get("/api/user/cart", {
        headers: { authorization: TOKEN },
      });
      if (response.status === 200) {
        const cartItems = response.data.cart;
        dispatch({ type: "SET_CART", payload: cartItems });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // add to cart
  const addToCart = async (product,size) => {
    const headers = {
      authorization: TOKEN,
    };
    try {
      const updatedProduct = {...product, size}
      const response = await axios.post(
        "/api/user/cart",
        { product: { ...updatedProduct } },
        { headers }
      );
      if (response.status === 201) {
        const cartItems = response.data.cart;
        dispatch({ type: "SET_CART", payload: cartItems });
        console.log(cartItems);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    getCartItems();
  });

  return (
    <CartContext.Provider
      value={{
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
