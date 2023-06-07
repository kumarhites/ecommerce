const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return {
        ...state,
        filterProducts: [...action.payload],
        // allProducts: [...action.payload],
      };
    case "SORT_FILTER":
      return { ...state, sortInput: action.payload };
    case "SEARCH_FILTER":
      return { ...state, searchInput: action.payload };
    case "GET_CATEGORY_DETAILS":
      return state.categoryInput.includes(action.payload)
        ? {
            ...state,
            categoryInput: state.categoryInput.filter(
              (category) => category !== action.payload
            ),
          }
        : {
            ...state,
            categoryInput: [...state.categoryInput, action.payload],
          };
    case "GET_BRAND_DETAILS":
      return state.brandInput.includes(action.payload)
        ? {
            ...state,
            brandInput: state.brandInput.filter(
              (brandName) => brandName !== action.payload
            ),
          }
        : {
            ...state,
            brandInput: [...state.brandInput, action.payload],
          };
    case "GET_GENDER":
      return state.genderInput.includes(action.payload)
        ? {
            ...state,
            genderInput: state.genderInput.filter(
              (brandName) => brandName !== action.payload
            ),
          }
        : {
            ...state,
            genderInput: [...state.genderInput, action.payload],
          };

    case "RATING_FILTER":
      return { ...state, ratingInput: action.payload };

    case "CLEAR_FILTER":
      return {
        ...initialState,
        filterProducts: action.payload,
      };
    default:
      return state;
  }
};

export const initialState = {
  filterProducts: [],
  searchInput: "",
  sortInput: "",
  ratingInput: "1",
  categoryInput: [],
  brandInput: [],
  genderInput: [],
};

export default filterReducer;
