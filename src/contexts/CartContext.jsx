// creating the context
import { createContext, useContext, useEffect, useReducer } from "react";
import { filterTypes } from "../constants/filterTypes";
import { AuthContext } from "./AuthContext";
import { AddToCartService } from "../services/Cart/AddToCartService";
import { GetCartService } from "../services/Cart/GetCartService";
import { RemoveFromCartService } from "../services/Cart/RemoveFromCartService";
// import { ChangeQtyService } from "../services/Cart/ChangeQtyService";
import axios from "axios";

const { SET_CART_STATE, SET_WISHLIST_STATE } = filterTypes;

export const CartContext = createContext();

const cartAndWishlistReducer = (state, action) => {
  switch (action.type) {
    case SET_CART_STATE:
      return { ...state, cart: action.payload };
    case SET_WISHLIST_STATE:
      return { ...state, wishlist: action.payload };
    default:
      return { ...state };
  }
};

export const CartProvider = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const [state, dispatch] = useReducer(cartAndWishlistReducer, {
    cart: [],
    wishlist: [],
  });

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await GetCartService(token);
      if (response.status === 200) {
        dispatch({ type: SET_CART_STATE, payload: response.data.cart });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWishlist = async () => {
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "GET",
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        const { wishlist } = await response.json();
        dispatch({ type: SET_WISHLIST_STATE, payload: wishlist });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
    fetchWishlist();
  }, []);

  const handleAddToCart = async (product) => {
    if (isLoggedIn) {
      const token = localStorage.getItem("token");
      try {
        const response = await AddToCartService(product, token);
        if (response.status === 201) {
          dispatch({ type: SET_CART_STATE, payload: response.data.cart });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleRemoveFromCart = async (_id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await RemoveFromCartService(_id, token);
      if (response.status === 200) {
        dispatch({ type: SET_CART_STATE, payload: response.data.cart });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isItemPresentInCartHandler = (product) => {
    return state.cart.find(({ _id }) => product._id === _id);
  };

  const cartCountHandler = async (productId, type) => {
    try {
      const token = localStorage.getItem("token");
      const { data, status } = await axios({
        method: "POST",
        data: { action: { type: type } },
        url: `/api/user/cart/${productId}`,
        headers: { authorization: token },
      });
      if (status === 200) {
        console.log(data?.cart);
      }
    } catch (error) {}
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        handleAddToCart,
        wishlist: state.wishlist,
        cartCountHandler,
        isItemPresentInCartHandler,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
