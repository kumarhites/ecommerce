export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cart: action.payload };
    case "SET_WISHLIST":
      return { ...state, wishlist: action.payload };
    default:
      return state;
  }
};

export const initialCartState = {
  card: [],
  wishlist: [],
};