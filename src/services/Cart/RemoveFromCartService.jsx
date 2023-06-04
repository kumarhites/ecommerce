import axios from "axios";

export const RemoveFromCartService = async (productId, encodedToken) => {
  return await axios.delete(`/api/user/cart/${productId}`, {
    headers: { authorization: encodedToken },
  });
};