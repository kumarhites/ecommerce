import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AuthContext } from "./AuthContext";
import { getCartService } from "../services/Cart/getCartService";
// import { AuthContext } from "./AuthContext";

export const CartContext = createContext();
const initialState = {
  cart: [],
  wishlist: [],
};

export const CartProvider = ({ children }) => {
  const { token, currentUser, setCurrentUser } = useContext(AuthContext);
  const [state, dispatch] = useReducer(cartReducer, {
    cart: currentUser?.cart || initialState.cart,
    wishlist: initialState.wishlist,
  });

  //get cart items
  const getCartItems = async () => {
    try {
      const response = await getCartService(token);
      if (response.status === 200) {
        const cartItems = response.data.cart;
        dispatch({ type: "SET_CART", payload: cartItems });
      }
    } catch (error) {
      // console.log(error);
    }
  };

  //get wishlist items
  const getWishListItems = async () => {
    try {
      const response = await axios.get("/api/user/wishlist", {
        headers: { authorization: token },
      });
      if (response.status === 200) {
        const wishlistItem = response.data.wishlist;
        dispatch({ type: "SET_WISHLIST", payload: wishlistItem });
        // console.log(response);
      }
    } catch (error) {
      // console.log(error);
    }
  };

  // add to cart
  const addToCart = async (product) => {
    const headers = {
      authorization: token,
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
        toast.success("Item added to cart successfully!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to add to cart!");
    }
  };

  //add wishlist items
  const addToWishList = async (product) => {
    const headers = {
      authorization: token,
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
        toast.success(`Item added to wishlist successfully!`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to add to wishlist!");
    }
  };

  //cart count handleQtyDecrease
  const cartCountHandler = async (product, type) => {
    const headers = {
      authorization: token,
    };
    try {
      if (type === "decrement" && product.qty <= 1) {
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
            toast.success(`Removed one ${product.title} from the cart!`);
          } else {
            toast.success(`Added another ${product.title} to the cart!`);
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
      authorization: token,
    };
    try {
      const response = await axios.delete(`/api/user/cart/${product._id}`, {
        headers,
      });
      if (response.status === 200) {
        const cartItems = response.data.cart;
        dispatch({ type: "SET_CART", payload: cartItems });
        toast.success(`Removed ${product.title} from your cart!`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const orderSuccess = async (product) => {
    const headers = {
      authorization: token,
    };
    try {
      const response = await axios.delete(`/api/user/cart/${product._id}`, {
        headers,
      });
      if (response.status === 200) {
        const cartItems = response.data.cart;
        dispatch({ type: "SET_CART", payload: cartItems });
        toast.success(`Order placesd successfully!`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //remove item from wishlist
  const removeItemFromWishlist = async (product) => {
    const headers = {
      authorization: token,
    };
    try {
      const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
        headers,
      });
      if (response.status === 200) {
        const wishlistItem = response.data.wishlist;
        dispatch({ type: "SET_WISHLIST", payload: wishlistItem });
        toast.success(`Removed ${product.title} from your cart!`);
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

  const resetCartState = () => {
    dispatch({ type: "SET_CART", payload: initialState.cart });
    dispatch({ type: "SET_WISHLIST", payload: initialState.wishlist });
  };

  useEffect(() => {
    if (!currentUser) {
      resetCartState();
    }
  }, [currentUser]);

  useEffect(() => {
    token && getCartItems();
    token && getWishListItems();
  }, [token]);

  // Update currentUser when cart changes, but only when cart changes
  useEffect(() => {
    if (currentUser && state.cart !== currentUser.cart) {
      setCurrentUser((prevUser) => ({
        ...prevUser,
        cart: state.cart,
      }));
    }
  }, [state.cart, setCurrentUser, currentUser]);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        addToWishList,
        isItemPresentInCartHandler,
        isItemPresentinWishlistHandler,
        cart: state?.cart,
        wishlist: state?.wishlist,
        cartCountHandler,
        removeItemFromCart,
        removeItemFromWishlist,
        orderSuccess,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
