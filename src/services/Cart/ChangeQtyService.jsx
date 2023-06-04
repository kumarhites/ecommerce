import axios from "axios";

export const ChangeQtyService = async (id, encodedToken, type) => {
  return await axios.post(
    `/api/user/cart/${id}`,
    {
      action: {
        type,
      },
    },
    {
      headers: { authorization: encodedToken },
    }
  );
};
