import { createContext, useReducer, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";
import axios from "axios";

export const CartContext = createContext();

const initialState = {
  cart: [],
  wishlist: [],
};

const TOKEN = localStorage.getItem("token");

export const CartProvider = ({ children }) => {
  const [error, setError] = useState(false);
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

  //get wishlist items
  const getWishListItems = async () => {
    try {
      const response = await axios.get("/api/user/wishlist", {
        headers: { authorization: TOKEN },
      });
      if (response.status === 200) {
        const wishlistItem = response.data.wishlist;
        dispatch({ type: "SET_WISHLIST", payload: wishlistItem });
        // console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // add to cart
  const addToCart = async (product) => {
    const headers = {
      authorization: TOKEN,
    };
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product: { ...product } },
        { headers }
      );
      if (response.status === 201) {
        const cartItems = response.data.cart;
        dispatch({ type: "SET_CART", payload: cartItems });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //add wishlist items
  const addToWishList = async (product) => {
    const headers = {
      authorization: TOKEN,
    };
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product: { ...product } },
        { headers }
      );
      if (response.status === 201) {
        const wishlistItem = response.data.wishlist;
        dispatch({ type: "SET_WISHLIST", payload: wishlistItem });
        console.log(wishlistItem);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //cart count handleQtyDecrease
  const cartCountHandler = async (product, type) => {
    const headers = {
      authorization: TOKEN,
    };
    try {
      if (type === "decrement" && product.qty === 1) {
        removeItemFromCart(product);
        // return;
      } else {
        const response = await axios.post(
          `/api/user/cart/${product._id}`,
          {
            action: {
              type,
            },
          },
          { headers }
        );
        if (response.status === 200) {
          // setCartLoading(false);
          if (type === "decrement") {
            console.log(`Removed one ${product.title} from the cart!`);
          } else {
            console.log(`Added another ${product.title} to the cart!`);
          }
          dispatch({ type: "SET_CART", payload: response.data.cart });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  //remove item from cart
  const removeItemFromCart = async (product) => {
    const headers = {
      authorization: TOKEN,
    };
    try {
      const response = await axios.delete(`/api/user/cart/${product._id}`, {
        headers,
      });
      if (response.status === 200) {
        const cartItems = response.data.cart;
        dispatch({ type: "SET_CART", payload: cartItems });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //remove item from wishlist
  const removeItemFromWishlist = async (product) => {
    const headers = {
      authorization: TOKEN,
    };
    try {
      const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
        headers,
      });
      if (response.status === 200) {
        const wishlistItem = response.data.wishlist;
        dispatch({ type: "SET_WISHLIST", payload: wishlistItem });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //check if the item is presnt in cart
  const isItemPresentInCartHandler = (product) => {
    return state.cart.find(({ _id }) => product._id === _id);
  };

  //check if the item is present in wishlist
  const isItemPresentinWishlistHandler = (product) => {
    return state.wishlist.find(({ _id }) => product._id === _id);
};

  useState(() => {
    getCartItems();
    getWishListItems();
  }, []);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        addToWishList,
        isItemPresentInCartHandler,
        isItemPresentinWishlistHandler,
        cart: state.cart,
        wishlist: state.wishlist,
        cartCountHandler,
        removeItemFromCart,
        removeItemFromWishlist,
        error,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
