//product reducer
export const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };

    case "SET_PRODUCT":
      const trending = action.payload.filter((currentElement) => {
        return currentElement.trending === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        trending,
      };

    case "API_ERROR":
      return { ...state, isLoading: false, isError: true };

    // case "SET_SINGLE_PRODUCT":
    //   return { ...state, singleProduct: action.payload };

    default: {
      return state;
    }
  }
};
