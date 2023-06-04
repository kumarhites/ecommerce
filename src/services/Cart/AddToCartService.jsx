import axios from "axios";

export const AddToCartService = async (product, encodedToken) => {
  return await axios.post(
    "/api/user/cart",
    { product: { ...product } },
    {
      headers: { authorization: encodedToken },
    }
  );
};
